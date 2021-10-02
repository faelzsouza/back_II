import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        favGames: import(".prisma/client").GamesOnProfiles[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favGames: import(".prisma/client").GamesOnProfiles[];
    }>;
    update(id: number, data: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
}
