import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Detalle } from './detalle.entity';
import { CreateDetalleDto } from './dto/create-detalle.dto';


@Injectable()
export class DetalleService {
    constructor( @InjectRepository(Detalle) private detalleRepository: Repository<Detalle>) {}

    async createDetalle ( detalle: CreateDetalleDto){
        const newDetalle = this.detalleRepository.create(detalle);
        return this.detalleRepository.save(newDetalle)
    }

    getDetalles(){
        return this.detalleRepository.find()
    }

    async getDetalle(id: number){
        const detalleFound =  await this.detalleRepository.findOne({
            where: {
                id
            }
        });

        if (!detalleFound) {
            return new HttpException('Detalle not found', HttpStatus.NOT_FOUND)
        }
        return detalleFound;


    }
}
