import { Genre } from 'src/genres/entities/genre.entity';
import { ConnectProfileDto } from 'src/profiles/dto/connect-profile.dto';
export declare class Game {
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailer?: string;
    gameplay?: string;
    genres?: Genre;
    favorites?: ConnectProfileDto;
}
