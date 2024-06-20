import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //Aqui no nestJs chamamos as anotações(spring) de Decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
