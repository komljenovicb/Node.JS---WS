import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Usluga } from "./Usluga";

@Entity()
export class JedinicaMere {

    @PrimaryGeneratedColumn()
    sifraJM: number;

    @Column()
    nazivJM: string;

    @OneToMany(type => Usluga, usluga => usluga.jedinicaMere)
    usluge: Usluga[];
	
}
