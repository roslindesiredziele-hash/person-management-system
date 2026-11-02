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