import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateProfileDto) {
    //'This action adds a new profile';
    this.prisma.profile.create({ data });
  }

  findAll() {
    //`This action returns all profiles`;
    this.prisma.profile.findMany({ include: { favGames: true } });
  }

  findOne(id: number) {
    //`This action returns a #${id} profile`;
    this.prisma.profile.findUnique({
      where: { id },
      include: { favGames: true },
    });
  }

  update(id: number, data: UpdateProfileDto) {
    //`This action updates a #${id} profile`;
    this.prisma.profile.update({ where: { id }, data });
  }

  remove(id: number) {
    //`This action removes a #${id} profile`;
    this.prisma.profile.delete({ where: { id } });
  }
}
