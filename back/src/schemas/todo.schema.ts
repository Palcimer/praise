import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true, required: true }) // 유니크값
  email: string;
  @Prop({ required: true })
  nickName: string;
  @Prop()
  todos?: Array<Task>;
  @Prop()
  praise?: Array<Praise>;
}

export class Task {
  email: string;
  taskName: string;
  done: boolean;
  date: string;
}

export class Praise {
  email: string;
  name: string;
  picUrl: string;
  lines: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);