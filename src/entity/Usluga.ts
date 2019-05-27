import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { JedinicaMere } from "./JedinicaMere";

@Entity()
export class Usluga {

    @PrimaryGeneratedColumn()
    uslugaID: number;

    @Column()
    nazivUsluge: string;

    @Column()
    opisUsluge: string;

    //moze i {lazy: true} onda je radnik.sektor promise
    //ako se ne stavi nista, mora u find-u za radnike da se stavi {relations: ["sektor"]}
    @ManyToOne(type => JedinicaMere, jedinicaMere => jedinicaMere.usluge, {eager: true})
    jedinicaMere: JedinicaMere;

}

