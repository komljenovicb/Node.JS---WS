import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { JedinicaMere } from "../entity/JedinicaMere";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json(await getRepository(JedinicaMere).find());
    } catch(e) {
        res.json({error: e.message});
    }
});

export default router;
