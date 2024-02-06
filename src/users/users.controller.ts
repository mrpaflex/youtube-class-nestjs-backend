import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersSevice: UsersService){}


    @Post('/create')
    async createUser(@Body() input: CreateUserDTO){
        return await this.usersSevice.create(input)
    }


    @Get('/test')
    async getTest(){
        return 'my code is running fine now'
    }

  


}
