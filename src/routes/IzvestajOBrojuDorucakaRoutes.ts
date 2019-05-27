import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { IzvestajOBrojuDorucaka } from "../entity/IzvestajOBrojuDorucaka";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json(await getRepository(IzvestajOBrojuDorucaka).find());
    } catch(e) {
        res.json({error: e.message});
    }
});

export default router;