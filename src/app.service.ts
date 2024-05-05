import { Injectable } from '@nestjs/common';
import { Cats } from './interface/app.interface';

@Injectable()
export class AppService {
  private readonly cats: Cats[] = [
    {
      id: "12",
      name: "Alice",
      email: "alice@email.com",
      age: 18
    },
    {
      id: "12",
      name: "Alice",
      email: "alice@email.com",
      age: 18
    }
  ];
  getAll(): Cats[] {
    return this.cats
  }

}
