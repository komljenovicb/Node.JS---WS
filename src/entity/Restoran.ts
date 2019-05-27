import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IzvestajOBrojuDorucaka } from "./IzvestajOBrojuDorucaka";

@Entity()
export class Restoran {

    @PrimaryGeneratedColumn()
    idRestorana: number;

    @Column()
    nazivRestorana: string;

	@OneToMany(type => IzvestajOBrojuDorucaka, izvestaj => izvestaj.restoran)
    izvestaji: IzvestajOBrojuDorucaka[];

}
