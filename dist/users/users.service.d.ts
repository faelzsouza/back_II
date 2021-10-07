import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '.prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: number, dto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
