import { Module } from '@nestjs/common';
import { PastelesService } from './pasteles.service';
import { PastelesController } from './pasteles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pastele } from './entities/pastele.entity';
import { CreadoresModule } from '../creadores/creadores.module';

@Module({
  controllers: [PastelesController],
  providers: [PastelesService],
  imports: [
    CreadoresModule,
    TypeOrmModule.forFeature([Pastele])
  ],
  exports: [ PastelesService, TypeOrmModule]
})
export class PastelesModule {}
