require('dotenv').config();
const secret = process.env.SECRET;

export const jwtConstants = {
  secret: secret,
};
