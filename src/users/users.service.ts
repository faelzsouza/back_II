import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateUserDto) {
    // 'This action adds a new user';
    return this.prisma.user.create({ data });
  }

  findAll() {
    // `This action returns all users`;
    return this.prisma.user.findMany({ include: { profiles: true } });
  }

  findOne(id: number) {
    // `This action returns a #${id} user`;
    return this.prisma.user.findUnique({
      where: { id },
      include: { profiles: true },
    });
  }

  update(id: number, data: UpdateUserDto) {
    // `This action updates a #${id} user`;
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: number) {
    //`This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id } });
  }
}
