import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CreadoresModule } from '../creadores/creadores.module';
import { PastelesModule } from '../pasteles/pasteles.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ CreadoresModule, PastelesModule ]
})
export class SeedModule {}
