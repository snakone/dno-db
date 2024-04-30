import { Injectable, WritableSignal, signal } from '@angular/core';

import { Calculation } from '@typed/classes';
import { UPGRADE_LEVELS } from '@typed/enums';



@Injectable({ providedIn: 'root' })


export class CalculationsService {

  public calculation: WritableSignal<Calculation> = signal(new Calculation());

  constructor() { }

  public setCalculation(calc: Calculation): void {
    this.calculation.set(calc);
  }

}
