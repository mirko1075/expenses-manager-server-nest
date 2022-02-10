import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
  getAll(): void {
    console.log('All expenses');
  }
}
