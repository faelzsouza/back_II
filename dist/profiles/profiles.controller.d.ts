import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(createProfileDto: CreateProfileDto): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateProfileDto: UpdateProfileDto): void;
    remove(id: string): void;
}
