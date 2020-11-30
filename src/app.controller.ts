import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.user();
  }

  @Get('/photo')
  getPhoto(){
    return this.appService.photo()
  }

  @Get('/photo/:id')
  getPhotoByUser(@Param('id') id: string){
    return this.appService.getPhotoByUser(id)
  }
  
  @Post('/createUser')
  createUser(@Body() user){
    return this.appService.createUser(user)
  }
  @Post('/create/:id')
  create(@Param('id')id: string, @Body() photo){
    return this.appService.createPhoto(id, photo)
  }
}
