import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGenreDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGenreDto: UpdateGenreDto): string;
    remove(id: number): string;
}
