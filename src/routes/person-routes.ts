import { Router, Request, Response } from "express";
import { Person, PersonDb} from "../models/person_model.ts";
import { db } from "../db.ts";

const tab: Person[] = [];
const p1: Person = {name: "John", surname: "Smith", age: 22, pet: "dog"};
const p2: Person = {name: "Mary", surname: "Brown",age: 66};
tab.push(p1);
tab.push(p2);


export const personRoutertab = Router();

personRoutertab.get('/', (req: Request, res: Response) => {
    res.json(tab);
});

personRoutertab.get('/:id', (req: Request, res: Response) => {
    const num = Number(req.params.id);
    if (!Number.isInteger(num) || num < 0 || num >= tab.length) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).json({ error: `wrong id requested: ${req.params.id}` });
    } else {
        res.json(tab[num]);
    }
});

personRoutertab.post('/', async (req: Request, res: Response) => {
    const { name, surname, age, pet } = req.body;
    if(!name || typeof(name) !== 'string' || name.trim() === '') {
        res.status(400).json({ error: 'wrong name' });
        return;
    }
    if(!surname || typeof(surname) !== 'string' || surname.trim() === '') {
        res.status(400).json({ error: 'wrong surname' });
        return;
    }
    if(!age || typeof(age) !== 'number' || age < 0) {
        res.status(400).json({ error: 'wrong age' });
        return;
    }
    if(pet && (typeof(pet) !== 'string' || pet.trim() === '')) {
        res.status(400).json({ error: 'wrong pet' });
        return;
    }

    const pers: Person = { name, surname, age, pet };
    tab.push(pers);
    res.status(201).json(pers);
});

export const personRouterDb = Router();

personRouterDb.get('/', async (req: Request, res: Response) => {
    const peopleList = await db.all<PersonDb>('SELECT id, name, surname, age, pet FROM people ORDER BY id');
    res.json(peopleList);
});

personRouterDb.get('/:id', async (req: Request, res: Response) => {
    const num = Number(req.params.id);
    if (!Number.isInteger(num) || num < 0) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).json({ error: `wrong id requested: ${req.params.id}` });
    } else {

        const person = await db.get<PersonDb>('SELECT id, name, surname, age, pet FROM people WHERE id = ?', num);
        if (!person) {
            res.status(404).json({ error: `Person with id ${num} not found` });
        } else {
            res.json(person);
        }
    }
});

personRouterDb.post('/', async (req: Request, res: Response) => {
    const { name, surname, age, pet } = req.body;
    if(!name || typeof(name) !== 'string' || name.trim() === '') {
        console.log(`wrong name requested: ${req.body.name}`);
        res.status(400).json({ error: 'wrong name' });
        return;
    }
    if(!surname || typeof(surname) !== 'string' || surname.trim() === '') {
        console.log(`wrong surname requested: ${req.body.surname}`);
        res.status(400).json({ error: 'wrong surname' });
        return;
    }
    if(!age || typeof(age) !== 'number' || age < 0) {
        console.log(`wrong age requested: ${req.body.age}`);
        res.status(400).json({ error: 'wrong age' });
        return;
    }
    if(pet && (typeof(pet) !== 'string' || pet.trim() === '')) {
        console.log(`wrong pet requested: ${req.body.pet}`);
        res.status(400).json({ error: 'wrong pet' });
        return;
    }

    const pers = await db.get<PersonDb>(
        'INSERT INTO people (name, surname, age, pet) VALUES (?, ?, ?, ?) RETURNING id, name, surname, age, pet',
        [name, surname, age, pet]
    );

    res.status(201).json(pers);
});

personRouterDb.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).json({ error: `wrong id requested: ${req.params.id}` });
        return;
    }

    const result = await db.run('DELETE FROM people WHERE id = ?', id);

    if (result.changes === 0) {
        console.log(`Person with id ${id} not found`);
        res.status(404).json({ error: `Person with id ${id} not found` });
    } else {
        console.log(`Person with id ${id} deleted successfully`);
        res.status(200).json({ message: `Person with id ${id} deleted successfully` });
    }
});

personRouterDb.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).json({ error: `wrong id requested: ${req.params.id}` });
        return;
    }

    const { name, surname, age, pet } = req.body;
    if(!name || typeof(name) !== 'string' || name.trim() === '') {
        console.log(`wrong name requested: ${req.body.name}`);
        res.status(400).json({ error: 'wrong name' });
        return;
    }
    if(!surname || typeof(surname) !== 'string' || surname.trim() === '') {
        console.log(`wrong surname requested: ${req.body.surname}`);
        res.status(400).json({ error: 'wrong surname' });
        return;
    }
    if(!age || typeof(age) !== 'number' || age < 0) {
        console.log(`wrong age requested: ${req.body.age}`);
        res.status(400).json({ error: 'wrong age' });
        return;
    }
    if(pet && (typeof(pet) !== 'string' || pet.trim() === '')) {
        console.log(`wrong pet requested: ${req.body.pet}`);
        res.status(400).json({ error: 'wrong pet' });
        return;
    }

    const updated = await db.get<PersonDb>(
        'UPDATE people SET name = ?, surname = ?, age = ?, pet = ? WHERE id = ? RETURNING id, name, surname, age, pet',
        [name, surname, age, pet, id]
    );

    if (!updated) {
        console.log(`Person with id ${id} not found`);
        res.status(404).json({ error: `Person with id ${id} not found` });
        return;
    }
    
    res.json(updated);
});