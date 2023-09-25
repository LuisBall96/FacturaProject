import { Module } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleController } from './detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalle } from './detalle.entity';
import { FacturaModule } from 'src/factura/factura.module';
import { ConceptoModule } from 'src/concepto/concepto.module';


@Module({
  imports: [TypeOrmModule.forFeature([Detalle]), FacturaModule, ConceptoModule],
  providers: [DetalleService],
  controllers: [DetalleController],
})
export class DetalleModule {}
