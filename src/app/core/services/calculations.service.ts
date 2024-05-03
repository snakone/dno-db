import { Injectable, WritableSignal, signal } from '@angular/core';
import { DNO_EnhancementItem } from '@shared/types/interfaces';

import { Calculation } from '@typed/classes';
import { UPGRADE_LEVELS } from '@typed/enums';



@Injectable({ providedIn: 'root' })


export class CalculationsService {

  public calculation: WritableSignal<Calculation> = signal(new Calculation());
  public fullJSON: DNO_EnhancementItem[] = [];

  constructor() { }

  public setCalculation(calc: Calculation): void {
    this.calculation.set(calc);
  }

}
