import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usluga } from "../entity/Usluga";
import { JedinicaMere } from "../entity/JedinicaMere";

const router = Router();


router.get("/", async (req: Request, res: Response) => {
    try {
        res.json(await getRepository(Usluga).find());
    } catch(e) {
        res.json({error: e.message});
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try{
        let usluga = await getRepository(Usluga).findOne(req.params.id);
        if(usluga){
            res.json(usluga);
        }else {
            res.json({error: `Usluga sa ID-jem ${req.params.id} ne postoji.`});
        }
    } catch (e) {
        res.json({error: e.message});
    }
});


router.delete("/:id", async (req: Request, res: Response) => {
    try{
        let usluga = await getRepository(Usluga).findOne(req.params.id);
        if(usluga){
            await getRepository(Usluga).delete(req.params.id);
            res.sendStatus(200);
        }else {
            res.json({error: `Usluga sa ID-jem ${req.params.id} ne postoji.`});
        }
    } catch(e) {
        res.json({error: e.message});
    }
});


router.post("/", async (req: Request, res: Response) => {
    try{
        let jedinicaMere = await getRepository(JedinicaMere).findOne(req.body.jedinicaMere);
        if(!jedinicaMere) {
            res.json({error: `JedinicaMere sa id ${req.body.jedinicaMereID} ne postoji.`});
            return;
        }
        let result = await getRepository(Usluga).insert({...req.body, jedinicaMere});
        res.json(await getRepository(Usluga).findOne(result.identifiers[0].id));
    } catch(e) {
        res.json({error: e.message});
    }
});

router.patch("/:id", async (req: Request, res: Response) => {
    try{
        let jedinicaMere = await getRepository(JedinicaMere).findOne(req.body.jedinicaMere);
        if(!jedinicaMere) {
            res.json({error: `JedinicaMere sa id ${req.body.jedinicaMere} ne postoji.`});
            return;
        }
        await getRepository(Usluga).update(req.params.id, req.body);
        let usluga = await getRepository(Usluga).findOne(req.params.id)
        if(usluga){
            res.json(usluga);
        }else{
            res.json({error: `Usluga sa id ${req.params.id} ne postoji.`});
        }
    } catch(e) {
        res.json({error: e.message});
    }
});
export default router;