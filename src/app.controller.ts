import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cats } from './interface/app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  getHello(): Cats[] {
    return this.appService.getAll()
  }
  @Get('*')
  getNotRout(): string {
    return '404 not page!'
  }
}
