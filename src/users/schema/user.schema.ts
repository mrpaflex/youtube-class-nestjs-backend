import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class User {
    @Prop({type: String, required: true})
    firstName: string;
    @Prop({type: String, default: null})
    lastName?: string;
    @Prop({type: String, required: true})
    email: string;
    @Prop({type: String, required: true})
    userName: string;
    @Prop({type: String, required: true})
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)/// users as collection

