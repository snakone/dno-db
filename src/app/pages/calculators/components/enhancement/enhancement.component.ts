import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Calculation } from '@shared/types/classes';
import { CalculatorFacade } from '@core/ngrx/calculators/calculator.facade';
import { CalculationResult, EnhancementTry, SimpleItem } from '@shared/types/interfaces';

import { 
  BINARY_LIST,
  DNO_CLASSES,
  DNO_ITEM_PIECE_TYPE,
  DNO_ITEM_SETS, 
  ENHANCEMENT_RESULT
} from '@shared/types/enums';

import { 
  DNO_SET_LIST,
  DNO_CLASS_LIST,
  DNO_ITEM_PIECE_LIST,
  DNO_BINARY_LIST,
  SET_PIECES_BY_CLASS
} from '@shared/data.dno';
import { getRatioColor } from '@shared/utils.app';

@Component({
  selector: 'app-enhancement',
  templateUrl: './enhancement.component.html',
  styleUrl: './enhancement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EnhancementComponent {

  setList = DNO_SET_LIST;
  classList = DNO_CLASS_LIST;
  pieceList = DNO_ITEM_PIECE_LIST;
  jellyList = DNO_BINARY_LIST;
  friendList = DNO_BINARY_LIST;
  springList = [{key: 1, label: 'No'}, {key: 10, label: 'Stage 1: 10%'}, {key: 20, label: 'Stage 2: 20%'}, {key: 30, label: 'Stage 3: 30%'}];

  result$: Observable<CalculationResult | null> | undefined;
  loading$: Observable<boolean> | undefined;

  public calculation = new Calculation();

  constructor(private calcFacade: CalculatorFacade) { }

  ngOnInit() {
    this.result$ = this.calcFacade.result$;
    this.loading$ = this.calcFacade.loading$;
  }

  public calculate(): void {
    this.calcFacade.calculate(this.calculation);
  }

  public reset(): void {
    this.calculation = new Calculation();
    this.calcFacade.reset();
  }

  public onSetChange(className: DNO_CLASSES, set: DNO_ITEM_SETS) {
    this.pieceList = Object.entries(SET_PIECES_BY_CLASS[className][set])
                           .map(([key, value]) => ({ key, label: value })) as SimpleItem[];

    this.calculation.piece = DNO_ITEM_PIECE_TYPE.NONE;
  }

  public onClassChange(): void {
    this.calculation.set = DNO_ITEM_SETS.NONE;
    this.calculation.piece = DNO_ITEM_PIECE_TYPE.NONE;
  }

  public getBadgeResult(result: ENHANCEMENT_RESULT): string | undefined {
    switch(result) {
      case ENHANCEMENT_RESULT.SUCCESS: {
        return '<i class="fas fa-check"></i>';
      }

      case ENHANCEMENT_RESULT.FAIL: {
        return '<i class="fas fa-times">';
      }

      case ENHANCEMENT_RESULT.BREAK: {
        return '<i class="fas fa-heart-broken">'
      }

      case ENHANCEMENT_RESULT.DECREASE: {
        return '<i class="fas fa-arrow-down">'
      }
    }

    return undefined;
  }

  public getTotalMaterials(result: CalculationResult): {key: string, value: number}[] {
    if(!result.totalMaterials) { return []; }
    const materials = Object.entries(result.totalMaterials)
                            .filter(([key, _]) => key !== 'Gold')
                            .map(([key, value]) => ({key, value}));
 
    return this.calculation.jellies !== BINARY_LIST.YES ? materials.filter(mat => mat.key !== 'Item Protection Jellies') : materials;
  }

  public getTryMaterials(enhanTry: EnhancementTry): {key: string, value: number}[] {
    if(!enhanTry.materials) { return []; }
    const materials = Object.entries(enhanTry.materials)
                            .map(([key, value]) => ({key, value}));
 
    return this.calculation.jellies !== BINARY_LIST.YES ? materials.filter(mat => mat.key !== 'Item Protection Jellies') : materials;
  }

  public getColor(ratio: number = 0): string {
    return getRatioColor(ratio);
  }

  ngOnDestroy() {
    this.reset();
  }

}
