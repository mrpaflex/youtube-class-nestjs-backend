import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService)=>({
        uri: config.get<string>('MONGO_URI')
      }),
      inject: [ConfigService]
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
