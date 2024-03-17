import { Pastele } from "src/modulos/pasteles/entities/pastele.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

export class Creadore {
    @PrimaryColumn('increment')
    id: string;

    @Column('text', { unique: true})
    nombre: string;

    @OneToMany(
        () => Pastele,
        (pastel) => pastel.creador,
        { eager: true }
    )
    pasteles?: Pastele[]
}
