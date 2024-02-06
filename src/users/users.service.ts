import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    async create(input: CreateUserDTO){

        const {firstName, lastName, userName, email, password} = input;

        try {
           const user = await this.userModel.findOne({
            $or: [{email: email}, {userName: userName}]
           });

           if (user) {
            if ((user.email=== email) && (user.userName === userName)) {
                throw new HttpException('user with same email and username already exist', HttpStatus.UNPROCESSABLE_ENTITY)
            }

            if (user.email ===email) {
                throw new HttpException('user with same email already exist', HttpStatus.UNPROCESSABLE_ENTITY)
            }
            if (user.userName === userName) {
                throw new HttpException('user with same username already exist', HttpStatus.UNPROCESSABLE_ENTITY)
            }
          
           }

           const newUser = await this.userModel.create({
            firstName,
            lastName,
            userName,
            password,
            email
           })

           return newUser;


        } catch (error) {
           if (error instanceof HttpException) {
            throw error
           }
           throw new InternalServerErrorException('server error')
        }
       
    }
}
