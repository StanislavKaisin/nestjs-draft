import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get mongo_Uri(): string {
    return this.configService.get<string>('app.MONGO_URI');
  }
  get secret(): string {
    return this.configService.get<string>('app.SECRET');
  }

  get port(): number {
    return Number(this.configService.get<number>('app.PORT'));
  }
}
