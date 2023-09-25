import { Controller, Post, Body, Get, ParseIntPipe, Param } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';


@Controller('concepto')
export class ConceptoController {

    constructor(private conceptoService: ConceptoService){}

    @Post()
    createConcepto(@Body() concepto: CreateConceptoDto){
        return this.conceptoService.createConcepto(concepto)
    }

    @Get()
    getConceptos(){
        return this.conceptoService.getConceptos()
    }
}
