import { Artist } from './schema/artists.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}

  async create(createArtistDto: Partial<Artist>): Promise<Artist> {
    const createdCat = new this.artistModel(createArtistDto);
    return createdCat.save();
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.artistModel.findByIdAndDelete(id).exec();
  }
}
