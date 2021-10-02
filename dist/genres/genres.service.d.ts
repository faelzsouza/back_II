import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genre & {
        games: import(".prisma/client").GenresOnGames[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").GenresOnGames[];
    }>;
    update(id: number, data: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
