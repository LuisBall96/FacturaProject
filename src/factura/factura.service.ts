import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Factura } from './factura.entity';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Injectable()
export class FacturaService {
    constructor( @InjectRepository(Factura) private facturasRepository: Repository<Factura>,
    private userService: UserService){}

    async createFactura (factura: CreateFacturaDto){
        const userFound = await this.userService.getUser(factura.userId);

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const newFactura = this.facturasRepository.create(factura);
        return this.facturasRepository.save(newFactura)
    }

    getFacturas() {
        return this.facturasRepository.find({
            relations: ['user'],
        })
    }

    async getFactura(id: number){
        const facturaFound = await this.facturasRepository.findOne({
            where: {
                id
            }
        });

        if (!facturaFound) {
            return new HttpException('Factura not found', HttpStatus.NOT_FOUND)
        }
        return facturaFound;
    }

}
