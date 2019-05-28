import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { SluzbaZaInventar } from "./SluzbaZaInventar";
import { Zaposleni } from "./Zaposleni";

@Entity()
export class SluzbaOdrzavanja {

    @PrimaryGeneratedColumn()
    sluzbaID: number;

    @Column()
    brojZaposlenih: number;

    @OneToOne(type => SluzbaZaInventar, inventar => inventar.sluzba)
    inventar: SluzbaZaInventar;
	
    @OneToMany(type => Zaposleni, zaposleni => zaposleni.sluzba)
    zaposleni: Zaposleni[];
	
}
