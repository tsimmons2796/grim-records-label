import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { Artists, ArtistSchema } from './schema/artists.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artists.name, schema: ArtistSchema }]),
  ],
  providers: [ArtistsService],
  controllers: [ArtistsController],
})
export class ArtistsModule {}
