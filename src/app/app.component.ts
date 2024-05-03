import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculationsService } from '@core/services/calculations.service';
import { HttpService } from '@core/services/http/http.service';
import { DNO_EnhancementItem } from '@shared/types/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'dno-db';

  constructor(http: HttpService, calc: CalculationsService) {
    const arr: DNO_EnhancementItem[] = [];
    http.get('assets/Enhancements.json').subscribe((res: any) => {
      Object.keys(res).forEach((key: string) => {
        res[key].item = key;
        arr.push(res[key])
      })
      calc.fullJSON = arr;
    })
  }
}
