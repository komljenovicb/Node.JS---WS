import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Zaposleni } from "./Zaposleni";
import { Restoran } from "./Restoran";
import { StavkaIzvestaja } from "./StavkaIzvestaja";

@Entity()
export class IzvestajOBrojuDorucaka {

    	@PrimaryGeneratedColumn()
    	rbrIzvestaja: number;

    	@Column()
    	datumOd: Date;
	
	@Column()
	datumDo: Date;

	@Column()
	ukupanBrojDorucaka: number

	@Column()
	status: string;
	
	@ManyToOne(type => Zaposleni, zaposleni => zaposleni.izvestaji, {eager: true})
    	zaposleni: Zaposleni;
	
	@ManyToOne(type => Restoran, restoran => restoran.izvestaji, {eager: true})
    	restoran: Restoran;
	
	@OneToMany(type => StavkaIzvestaja, stavkeIzvestaja => stavkeIzvestaja.izvestaj)
    	stavkeIzvestaja: StavkaIzvestaja[];
	
}
