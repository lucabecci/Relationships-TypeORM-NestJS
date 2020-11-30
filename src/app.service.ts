import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entity/Photo.entity';
import { User } from './entity/User.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>
  ){}

  async user() {
    return await this.userRepository.find()
      }

  async photo() {
    return await this.photoRepository.find()
  }

  async getPhotoByUser(userID){
    const user = await this.userRepository.findOne({id: parseInt(userID)})
    const photos = await this.photoRepository.find({user})
    return photos
  }

  async createUser(user){
    const result = await this.userRepository.save(user)
    return result
  }

  async createPhoto(userID: string, photo){

    const result = await this.userRepository.findOne({id: parseInt(userID)})
    console.log(result)

    const photo1 = photo
    photo1.user = result 
    const photoResult = await this.photoRepository.save(photo1)
    return {
      result,
      photoResult
    }
  }
}
