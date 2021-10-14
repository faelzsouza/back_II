import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto){
        return this.authService.login(dto)
    }
}
