import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Artists } from './schema/artists.schema';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  async create(@Body() createCatDto: Partial<Artists>) {
    return this.artistsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Artists[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Artists> {
    return this.artistsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.artistsService.delete(id);
  }
}
