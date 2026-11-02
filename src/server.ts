import express from "express";

import { Express, Request, Response } from "express";

const app = express();
const port: number = 2000;

app.get('/api/Persons', (req: Request, res: Response) => {
    res.json(tab);
});

app.get('/api/Persons/:id', (req: Request, res: Response) => {
    
}

app.listen(port, () => {
    console.log(`My Server is running at http://localhost:${port}`);
});