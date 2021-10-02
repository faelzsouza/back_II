import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateGameDto) {
    //'This action adds a new game';
    return this.prisma.game.create({ data });
  }

  findAll() {
    //`This action returns all games`;
    return this.prisma.game.findMany();
  }

  async findOne(id: number) {
    //`This action returns a #${id} game`;
    return this.prisma.game.findUnique({ where: { id }, rejectOnNotFound: true });
  }

  async update(id: number, data: UpdateGameDto) {
    //`This action updates a #${id} game`;
    return this.prisma.game.update({ where: { id }, data });
  }

  async remove(id: number) {
    //`This action removes a #${id} game`;
    return this.prisma.game.delete({ where: { id } });
  }
}
