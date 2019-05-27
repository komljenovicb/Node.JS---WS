import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Zaposleni } from "./Zaposleni";

@Entity()
export class Zaduzenje {

    @PrimaryGeneratedColumn()
    zaduzenjeID: number;

    @Column()
    funkcija: string;
	
	@OneToMany(type => Zaposleni, zaposleni => zaposleni.zaduzenje)
    zaposleni: Zaposleni[];

}