import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Factura } from './factura.entity';

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

    // @OneToMany(() => Factura, factura => factura.user)
    // facturas: Factura[]
}