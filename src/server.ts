import express from "express";

import { Express, Request, Response } from "express";

const app = express();
const port: number = 2000;

app.get('/api/Persons', (req: Request, res: Response) => {
    res.json(tab);
});

app.get('/api/Persons/:id', (req: Request, res: Response) => {
    const num = Number(req.params.id);
    if (!Number.isInteger(num) || num < 0 || num >= tab.length) {
        console.log(`wrong id requested: ${req.params.id}`);
        res.status(400).send(`wrong id requested: ${req.params.id}`);
    } 
    });

app.listen(port, () => {
    console.log(`My Server is running at http://localhost:${port}`);
});