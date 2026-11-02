import { Router, Request, Response } from "express";
import { Person, PersonDb} from "../models/person_model.ts";

export const personRoutertab = Router();

personRoutertab.get('/', (req: Request, res: Response) => {
    res.json(tab);
});