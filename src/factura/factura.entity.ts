import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

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

}

