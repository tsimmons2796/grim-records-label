// src/cats/schemas/cat.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Artists extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  country: string;

  @Prop()
  genre: string;

  @Prop()
  albums: [];
}

export const ArtistSchema = SchemaFactory.createForClass(Artists);
