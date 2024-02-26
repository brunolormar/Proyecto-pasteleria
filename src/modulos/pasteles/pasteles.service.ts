import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreatePasteleDto } from './dto/create-pastele.dto';
import { UpdatePasteleDto } from './dto/update-pastele.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pastele } from './entities/pastele.entity';
import { CreadoresService } from '../creadores/creadores.service';

@Injectable()
export class PastelesService {
  constructor(
    @InjectRepository(Pastele)
    private readonly pastelRepository: Repository<Pastele>,
    private creadoresService: CreadoresService
  ) {}

  @Post()
  async create(createPasteleDto: CreatePasteleDto) {
    try {
      const {creador, ...campos } = createPasteleDto;
      const pastel = this.pastelRepository.create({...campos});
      const creadorobj = await this.creadoresService.findOne(creador);
      pastel.creador = creadorobj; //direccion del objeto creador relacionado
      console.log(pastel);
      await this.pastelRepository.save(pastel);

      return{
        status: 200,
        data: pastel,
        msg: 'Pastel insertado correctamente'
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
    }
  }

  findAll() {
    return `This action returns all pasteles`;
  }

  findOne(Pastelid: string) {
    const creador= this.pastelRepository.findOne({
      where:{
        Pastelid
      },
      relations: {
        creador: true
      }
    });
    return creador;

  }

  @Patch()
  update(id: number, updatePasteleDto: UpdatePasteleDto) {
    return `This action updates a #${id} pastele`;
  }

  remove(id: number) {
    return `This action removes a #${id} pastele`;
  }

  async deleteAllPasteles(){
    const query = this.pastelRepository.createQueryBuilder('pastel');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }
}
