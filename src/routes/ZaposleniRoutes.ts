import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Zaposleni } from "../entity/Zaposleni";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json(await getRepository(Zaposleni).find());
    } catch(e) {
        res.json({error: e.message});
    }
});

export default router;