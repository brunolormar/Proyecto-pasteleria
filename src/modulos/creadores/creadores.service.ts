import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreateCreadoreDto } from './dto/create-creadore.dto';
import { UpdateCreadoreDto } from './dto/update-creadore.dto';
import { Creadore } from './entities/creadore.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreadoresService {
  constructor(
    @InjectRepository(Creadore)
    private readonly creadorRepository: Repository<Creadore>
  ) {}

  @Post()
  async create(createCreadoreDto: CreateCreadoreDto) {
    try {
      const creador = this.creadorRepository.create(createCreadoreDto);
      await this.creadorRepository.save(creador);
      return{
        msg: 'Registro Insertado',
        data: creador,
        status: 200
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
    }

  }

  findAll() {
    return `This action returns all creador`;
  }

  findOne(id: string) {
    const creador= this.creadorRepository.findOne({
      where:{
        id
      }
    });
    return creador;
  }

  @Patch()
  update(id: number, updateCreadoreDto: UpdateCreadoreDto) {
    return `This action updates a #${id} creador`;
  }

  remove(id: number) {
    return `This action removes a #${id} creador`;
  }

  async deleteAllCreadores(){
    const query = this.creadorRepository.createQueryBuilder('creador');
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
