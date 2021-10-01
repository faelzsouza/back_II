import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGameDto): void;
    findAll(): void;
    findOne(id: number): void;
    update(id: number, data: UpdateGameDto): void;
    remove(id: number): void;
}
