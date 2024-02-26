import { Injectable } from '@nestjs/common';
import { CreadoresService } from '../creadores/creadores.service';
import * as seedCreadores from '../seed/data/creadores.json'
import * as seedPasteles from '../seed/data/pasteles.json'
import { Creador } from '../creadores/interfaces/creador.interface';
import { CreateCreadoreDto } from '../creadores/dto/create-creadore.dto';
import { Pastel } from '../pasteles/interfaces/pastel.interface';
import { PastelesService } from '../pasteles/pasteles.service';

@Injectable()
export class SeedService {
  constructor (private readonly creadoreService: CreadoresService,
               private readonly pasteleService: PastelesService){}
  
  public async loadData(){
    await this.insertNewCreadores();
    this.insertNewPasteles();
  }
  
  private async insertNewCreadores(){
    await this.creadoreService.deleteAllCreadores();
    const insertPromisesCreadores = [];
    seedCreadores.forEach( (creador: Creador) => {
      insertPromisesCreadores.push(this.creadoreService.create(creador));      
    });
    const results = await Promise.all(insertPromisesCreadores);
    return true;
  }

  private async insertNewPasteles(){
    await this.pasteleService.deleteAllPasteles();
    const insertPromisesPasteles = [];
    seedPasteles.forEach( (pastel: Pastel) => {
      insertPromisesPasteles.push(this.pasteleService.create(pastel));      
    });
    const results = await Promise.all(insertPromisesPasteles);
    return true;
  }
}
