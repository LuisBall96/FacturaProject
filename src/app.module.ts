import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaModule } from './factura/factura.module';
import { ConceptoModule } from './concepto/concepto.module';
import { DetalleModule } from './detalle/detalle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'factura',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UserModule,
    FacturaModule,
    ConceptoModule,
    DetalleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
