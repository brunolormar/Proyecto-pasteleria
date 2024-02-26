import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PastelesService } from './pasteles.service';
import { CreatePasteleDto } from './dto/create-pastele.dto';
import { UpdatePasteleDto } from './dto/update-pastele.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('pasteles')
export class PastelesController {
  constructor(private readonly pastelesService: PastelesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  //@UseGuards(AuthGuard('jwt'))
  create(@Body() createPasteleDto: CreatePasteleDto) {
    console.log('usuario creado')
    return this.pastelesService.create(createPasteleDto);
  }

  @Get()
  findAll() {
    return this.pastelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pastelesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasteleDto: UpdatePasteleDto) {
    return this.pastelesService.update(+id, updatePasteleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pastelesService.remove(+id);
  }
}
