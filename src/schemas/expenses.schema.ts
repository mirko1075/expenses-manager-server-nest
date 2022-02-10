import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ExpenseDocument = Expenses & Document;

@Schema()
export class Expenses {
  @Prop()
  operationOrigin: string;

  @Prop()
  operationDescription: string;

  @Prop()
  operationCategory: { type: MongooseSchema.Types.ObjectId; ref: 'Categories' };

  @Prop()
  operationAmount: string;

  @Prop()
  operationDate: number;
}

@Schema()
export class Categories {
  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Expenses);
