import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Factura } from 'src/factura/factura.entity';
import { Detalle } from 'src/detalle/detalle.entity';

@Entity('factura_concepto')
export class Concepto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descripcion: string

    @Column({type: 'decimal'})
    precioUnitario: number

    @Column()
    cantidad: number

    @Column()
    facturaId: number

    @ManyToOne(() => Factura, (factura) => factura.conceptos)
    factura: Factura;

    @OneToMany(() => Detalle, detalle => detalle.conceptos)
    detalles: Detalle[]
}