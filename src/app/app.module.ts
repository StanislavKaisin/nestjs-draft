import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie, MovieSchema } from '../schemas/movie.schema';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

require('dotenv').config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const db = process.env.DB_NAME;

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.vizvr.mongodb.net/${db}?retryWrites=true&w=majority`;

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(mongoURI),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
