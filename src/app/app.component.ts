import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'dno-db';

  constructor(private http: HttpService) {
    // const arr: any = [];
    // http.get('assets/Enhancements.json').subscribe((res: any) => {
    //   Object.keys(res).filter((key: string) => key.includes("Flint")).forEach((key: string) => {
    //     res[key].item = key;
    //     arr.push(res[key])
    //   })

    //   console.log(arr)
    // })
  }
}
