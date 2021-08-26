import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from '../schemas/movie.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.appService.findAll();
  }
}
