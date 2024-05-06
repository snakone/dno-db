import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StorageService } from '@core/services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'dno-db';

  constructor(private ls: StorageService) {
    this.checkTheme();
  }

  private checkTheme(): void {
    if (this.ls.get('theme') === 'dark') {
      document.body.classList.toggle('dark');
    }
  }
}
