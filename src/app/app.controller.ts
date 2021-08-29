import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from '../schemas/movie.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //protected route
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Movie[]> {
    return this.appService.findAll();
  }
}
