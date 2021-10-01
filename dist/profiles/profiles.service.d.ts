import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProfileDto): void;
    findAll(): void;
    findOne(id: number): void;
    update(id: number, data: UpdateProfileDto): void;
    remove(id: number): void;
}
