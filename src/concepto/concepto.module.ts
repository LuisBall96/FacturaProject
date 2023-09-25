import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptoController } from './concepto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './concepto.entity';
import { FacturaModule } from 'src/factura/factura.module';

@Module({
  imports: [TypeOrmModule.forFeature([Concepto]), FacturaModule],
  providers: [ConceptoService],
  controllers: [ConceptoController],
  exports: [ConceptoService],
})
export class ConceptoModule {}
