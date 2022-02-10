import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesService } from './expenses/expenses.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/expenses')],
  controllers: [AppController, ExpensesController],
  providers: [AppService, ExpensesService],
})
export class AppModule {}
