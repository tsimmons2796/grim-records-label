import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Artist } from './schema/artists.schema';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  async create(@Body() createArtistDto: Partial<Artist>) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.artistsService.delete(id);
  }
}
