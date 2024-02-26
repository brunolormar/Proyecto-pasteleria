import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreadoresService } from './creadores.service';
import { CreateCreadoreDto } from './dto/create-creadore.dto';
import { UpdateCreadoreDto } from './dto/update-creadore.dto';

@Controller('creadores')
export class CreadoresController {
  constructor(private readonly creadoresService: CreadoresService) {}

  @Post()
  create(@Body() createCreadoreDto: CreateCreadoreDto) {
    console.log('usuario creado')
    return this.creadoresService.create(createCreadoreDto);
  }

  @Get()
  findAll() {
    return this.creadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creadoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreadoreDto: UpdateCreadoreDto) {
    return this.creadoresService.update(+id, updateCreadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creadoresService.remove(+id);
  }
}
