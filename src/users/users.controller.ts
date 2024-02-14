import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.user.dto';
import { LoginUserDTO } from './dto/login.user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersSevice: UsersService){}


    @Post('/create')
    async createUser(@Body() input: CreateUserDTO){
        return await this.usersSevice.create(input)
    }

    @Post('/login')
    async loginUser(@Body() body: LoginUserDTO){
        return this.usersSevice.loginUser(body)

    }

}
