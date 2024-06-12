import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class RewardService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  create(createRewardDto: CreateRewardDto) {
    const createdCat = new this.userModel(createRewardDto);
    return 'This action adds a new reward';
  }

  findAll() {
    return `This action returns all reward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reward`;
  }

  update(id: number, updateRewardDto: UpdateRewardDto) {
    return `This action updates a #${id} reward`;
  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
