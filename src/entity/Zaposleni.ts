import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { IzvestajOBrojuDorucaka } from "./IzvestajOBrojuDorucaka";
import { SluzbaOdrzavanja } from "./SluzbaOdrzavanja";
import { Zaduzenje } from "./Zaduzenje";

@Entity()
export class Zaposleni {

    @PrimaryGeneratedColumn()
    zaposleniID: number;

    @Column()
    ime: string;
	
	@Column()
    prezime: string;

	@ManyToOne(type => SluzbaOdrzavanja, sluzba => sluzba.zaposleni, { eager:true })
    sluzba: SluzbaOdrzavanja;
	
	@ManyToOne(type => Zaduzenje, zaduzenje => zaduzenje.zaposleni, { eager:true })
    zaduzenje: Zaduzenje;
	
	@OneToMany(type => IzvestajOBrojuDorucaka, izvestaji => izvestaji.zaposleni)
	izvestaji: IzvestajOBrojuDorucaka[];

}
