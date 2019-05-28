import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { IzvestajOBrojuDorucaka } from "./IzvestajOBrojuDorucaka";
import { SluzbaOdrzavanja } from "./SluzbaOdrzavanja";
import { Zaduzenje } from "./Zaduzenje";

@Entity()
export class SluzbaZaInventar {

    @PrimaryGeneratedColumn()
    sluzbaID: number;

    @Column()
    naziv: string;

    @OneToOne(type => SluzbaZaInventar, inventar => inventar.sluzba)
    sluzba: SluzbaOdrzavanja;
	
}
