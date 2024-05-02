import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdatesFacade } from '@core/ngrx/updates/updates.facade';
import { UpdateItem } from '@shared/types/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent {

  updates$: Observable<UpdateItem[]> | undefined = undefined;

  constructor(private updatesFacade: UpdatesFacade) {
    this.updates$ = updatesFacade.updates$;
  }

  public getDateToString(date: string): string {
    const foo = date.split(" ");
    return `${foo[0]} <strong>${foo[1]}</strong>`
  }

}
