import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Concepto } from 'src/concepto/concepto.entity';
import { Detalle } from 'src/detalle/detalle.entity';

@Entity('factura_user')
export class Factura {
  @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: string

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    fecha : Date

    @Column('decimal')
    total: number

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.facturas)
    user: User;

    @OneToMany(() => Concepto, concepto => concepto.factura)
    conceptos: Concepto[]

    @OneToMany(() => Detalle, detalle => detalle.factura)
    detalles: Detalle[]
}

