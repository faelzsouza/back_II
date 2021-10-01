import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateGameDto: UpdateGameDto): void;
    remove(id: string): void;
}
