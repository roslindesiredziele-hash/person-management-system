import express from "express";

import { Express, Request, Response } from "express";

const app = express();
const port: number = 2000;

app.get('/api/Persons', (req: Request, res: Response) => {
    res.json(tab);
});

app.listen(port, () => {