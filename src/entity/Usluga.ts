import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { JedinicaMere } from "./JedinicaMere";

@Entity()
export class Usluga {

    @PrimaryGeneratedColumn()
    uslugaID: number;

    @Column()
    nazivUsluge: string;

    @Column()
    opisUsluge: string;

    @ManyToOne(type => JedinicaMere, jedinicaMere => jedinicaMere.usluge, {eager: true})
    jedinicaMere: JedinicaMere;

}

