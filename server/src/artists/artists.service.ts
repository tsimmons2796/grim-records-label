import { Artists } from './schema/artists.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artists.name) private artistModel: Model<Artists>) {}

  async create(createArtistDto: Partial<Artists>): Promise<Artists> {
    const createdCat = new this.artistModel(createArtistDto);
    return createdCat.save();
  }

  async findAll(): Promise<Artists[]> {
    return this.artistModel.find().exec();
  }

  async findOne(id: string): Promise<Artists> {
    return this.artistModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.artistModel.findByIdAndDelete(id).exec();
  }
}
