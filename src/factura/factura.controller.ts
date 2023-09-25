import { Controller, Post, Body, Get, ParseIntPipe, Param } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Controller('factura')
export class FacturaController {

    constructor(private facturaService: FacturaService) {}

    @Post()
    createFactura(@Body() factura: CreateFacturaDto){
        return this.facturaService.createFactura(factura)
    }

    @Get()
    getFacturas(){
        return this.facturaService.getFacturas()
    }

    @Get(':id')
    getFactura(@Param('id', ParseIntPipe) id: number ){
        return this.facturaService.getFactura(id);
    }

}
