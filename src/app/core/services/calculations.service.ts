import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Calculation } from 'src/app/shared/types/classes';
import { UPGRADE_LEVELS } from 'src/app/shared/types/enums';

const switchGrade: Partial<Record<UPGRADE_LEVELS, number>> = {
  7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 15, 14: 10, 15: 5
}

@Injectable({providedIn: 'root'})


export class CalculationsService {

  public calculation: WritableSignal<Calculation> = signal(new Calculation());

  constructor() { }

  public setCalculation(calc: Calculation): void {
    this.calculation.set(calc);
  }

  public getRateFromGrade(grade: UPGRADE_LEVELS): number {
    if(Number(grade) <= 6) {
      return 100;
    }
    return switchGrade[grade] || 100;
  }
}
