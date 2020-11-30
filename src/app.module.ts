import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Photo } from './entity/Photo.entity';
import { User } from './entity/User.entity';



@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Photo, User])],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
