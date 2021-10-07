import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUserDto) {
    // 'This action adds a new user';
    const data: Prisma.UserCreateInput = {
      ...dto,
      profiles: dto.profiles ? {
        create: dto.profiles
      } : {}
    }
    return this.prisma.user.create({ data });
  }

  findAll() {
    // `This action returns all users`;
    return this.prisma.user.findMany({ include: { profiles: true } });
  }

  async findOne(id: number) {
    // `This action returns a #${id} user`;
    return this.prisma.user.findUnique({
      where: { id },
      include: { profiles: true },
      rejectOnNotFound: true,
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
      profiles: dto.profiles ? {
        create: dto.profiles
      } : {}
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number) {
    //`This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id } });
  }
}
