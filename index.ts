import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import UslugaRoutes from "./src/routes/UslugaRoutes";
import JedinicaMereRoutes from "./src/routes/JedinicaMereRoutes";
import ZaposleniRoutes from "./src/routes/ZaposleniRoutes";
import RestoranRoutes from "./src/routes/RestoranRoutes";
import IzvestajOBrojuDorucakaRoutes from "./src/routes/IzvestajOBrojuDorucakaRoutes";
import cors from 'cors';

createConnection().then(connection => {


    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    app.use("/usluga", UslugaRoutes);
    app.use("/jedinicamere", JedinicaMereRoutes);
	app.use("/zaposleni", ZaposleniRoutes);
    app.use("/restoran", RestoranRoutes);
	app.use("/izvestaj", IzvestajOBrojuDorucakaRoutes);
    
    app.listen(5000, () => console.log("Listening on 5000..."));

}).catch(error => console.log(error));