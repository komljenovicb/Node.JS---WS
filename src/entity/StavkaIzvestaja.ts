import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IzvestajOBrojuDorucaka } from "./IzvestajOBrojuDorucaka";

@Entity()
export class StavkaIzvestaja {

    @PrimaryGeneratedColumn()
    rbrStavke: number;
	
    @Column()
    datum: Date;
	
    @Column()
    dan: string;
	
    @Column()
    brojDorucaka: number;

    @ManyToOne(type => IzvestajOBrojuDorucaka, izvestaj => izvestaj.stavkeIzvestaja, { eager:true })
    izvestaj: IzvestajOBrojuDorucaka;
	
}
