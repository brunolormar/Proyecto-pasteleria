import { Module } from '@nestjs/common';
import { CreadoresService } from './creadores.service';
import { CreadoresController } from './creadores.controller';
import { Creadore } from './entities/creadore.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CreadoresController],
  providers: [CreadoresService],
  imports: [
    TypeOrmModule.forFeature([Creadore])
  ],
  exports: [ CreadoresService, TypeOrmModule]
})
export class CreadoresModule {}
