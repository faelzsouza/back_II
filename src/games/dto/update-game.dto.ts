import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsInt, IsArray } from 'class-validator';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsOptional()
    @IsInt({each: true})
    @IsArray()
    favorites?: number[]

    @IsOptional()
    @IsInt({each: true})
    @IsArray()
    deleteFavorites?: number[]
}
