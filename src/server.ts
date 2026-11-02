import express from "express";

import { Express, Request, Response } from "express";

const app = express();
const port: number = 2000;

app.use(express.json());

app.get('/api/Persons', (req: Request, res: Response) => {
    res.json(tab);
});

app.get('/api/Persons/:id', (req: Request, res: Response) => {
    const num = Number(req.params.id);
    if (!Number.isInteger(num) || num < 0 || num >= tab.length) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).json({ error: `wrong id requested: ${req.params.id}` });
    } else {
        res.json(tab[num]);
    }
});

app.post('/api/Persons', (req: Request, res: Response) => {
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
});

app.listen(port, () => {
    console.log(`My Server is running at http://localhost:${port}`);
});