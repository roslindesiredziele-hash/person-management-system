import { Router, Request, Response } from "express";
import { Person, PersonDb} from "../models/person_model.ts";

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

personRoutertab.post('/', (req: Request, res: Response) => {
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

personRouterDb.get('/', (req: Request, res: Response) => {
    const peopleList = db.all<PersonDb>('SELECT id, name, surname, age, pet FROM people ORDER BY id');
    