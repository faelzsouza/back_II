import { Prisma } from '.prisma/client'
import { Genre } from 'src/genres/entities/genre.entity';
import { ConnectProfileDto } from 'src/profiles/dto/connect-profile.dto';
import { Profile } from 'src/profiles/entities/profile.entity';

export class Game{
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailer?: string;
    gameplay?: string;
    genres?: Genre;
    favorites?: ConnectProfileDto
}

