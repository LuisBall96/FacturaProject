import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Concepto } from 'src/concepto/concepto.entity';
import { Factura } from 'src/factura/factura.entity';

@Entity('factura_detalle')
export class Detalle {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    facturaId: number

    @Column()
    conceptoId: number

    @Column()
    cantidad: number

    @ManyToOne(() => Factura, (factura) => factura.detalles)
    factura: Factura;

    @ManyToOne(() => Concepto, (concepto) => concepto.detalles)
    conceptos: Concepto;
}