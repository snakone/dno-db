import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemsService } from '@core/services/api/items/items.service';
import { HttpService } from '@core/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'dno-db';

  constructor(http: HttpService, itemSrv: ItemsService) {
    itemSrv.getItemByName('Immortal Greaves').subscribe(res => console.log(res))
  }
}
