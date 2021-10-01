import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateGameDto) {
    //'This action adds a new game';
    this.prisma.game.create({ data });
  }

  findAll() {
    //`This action returns all games`;
    this.prisma.game.findMany({ include: { users: true, genres: true } });
  }

  findOne(id: number) {
    //`This action returns a #${id} game`;
    this.prisma.game.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateGameDto) {
    //`This action updates a #${id} game`;
    this.prisma.game.update({ where: { id }, data });
  }

  remove(id: number) {
    //`This action removes a #${id} game`;
    this.prisma.game.delete({ where: { id } });
  }
}
