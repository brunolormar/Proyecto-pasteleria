import { Creadore } from "src/modulos/creadores/entities/creadore.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pastele {

    @PrimaryColumn('text', {
        unique: true,
    })
    Pastelid: string

    @Column('text', { 
        unique: true
    })
    nombre: string;

    @Column('text')
    thumbnailUrl: string;

    @Column('text',{
        nullable: true
    })
    Description: string;

    @Column('numeric', {
        nullable: true
    })
    precio: number;

    @ManyToOne(
        () => Creadore,
        (creador) => creador.pastel,
        {cascade: true}
    )
    creador?: Creadore
}
