import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  findByUsername(username: string) {
    return username;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
