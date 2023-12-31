import { Factura } from 'src/factura/factura.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    address: string

    @Column({unique: true})
    telephone: string

     @OneToMany(() => Factura, factura => factura.user)
     facturas: Factura[]
}