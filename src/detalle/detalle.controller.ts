import { Controller, Post, Body, Get, ParseIntPipe, Param } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { CreateDetalleDto } from './dto/create-detalle.dto';

@Controller('detalle')
export class DetalleController {
    constructor(private detalleService: DetalleService){}

    @Post()
    createDetalle(@Body() detalle: CreateDetalleDto){
        return this.detalleService.createDetalle(detalle)
    }

    @Get()
    getDetalles(){
        return this.detalleService.getDetalles()
    }

    @Get(':id')
    getDetalle(@Param('id', ParseIntPipe) id: number ){
        return this.detalleService.getDetalle(id);
    }
}
