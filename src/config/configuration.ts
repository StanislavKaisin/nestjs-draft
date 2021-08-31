import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  MONGO_URI: process.env.MONGO_URI,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT,
}));
