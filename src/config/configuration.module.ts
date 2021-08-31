import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './configuration.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MONGO_URI: Joi.string(),
        SECRET: Joi.string(),
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
