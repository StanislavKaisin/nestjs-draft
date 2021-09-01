import {
  Controller,
  Request,
  Post,
  UseGuards,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    try {
      return await this.authService.login(req.body);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
