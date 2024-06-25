import dotenv from 'dotenv';

dotenv.config()

export class Config {
  static BASE_URL = 'https://api.thedogapi.com/v1'
  static API_KEY = process.env.MY_DOG_API_KEY

  static getHeaders() {
    return {
      'Content-Type': 'application/json',
      'x-api-key': Config.API_KEY,
    };
  }
}
