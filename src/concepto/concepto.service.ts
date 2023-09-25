import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Concepto } from './concepto.entity';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { FacturaService } from 'src/factura/factura.service';

@Injectable()
export class ConceptoService {
    constructor( @InjectRepository(Concepto) private conceptosRepository: Repository<Concepto>, 
    private facturaServices: FacturaService
    ){}

    async createConcepto( concepto: CreateConceptoDto) {
        const newConcept = this.conceptosRepository.create(concepto);
        return this.conceptosRepository.save(newConcept)
    }

    getConceptos(){
        return this.conceptosRepository.find()
    }

}
