import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User, UserDocument } from '../schemas/users.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersModel.find().exec();
  }

  async findOne(name: string): Promise<User | undefined> {
    return this.usersModel.findOne({ name });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.usersModel.create(user);
  }
}
