import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScrollTopComponent {

  public goTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
