import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { HEADER_ITEMS } from '@shared/app.data';

import { 
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  tap
} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

  @ViewChild('drawer', { static: true }) drawer!: ElementRef;
  @ViewChild('trigger', { static: false }) menuTrigger!: MatMenuTrigger;

  dropDownOpened = false;
  items = HEADER_ITEMS;

  constructor(private router: Router) {
    this.$isMenuOpened().subscribe(res => this.dropDownOpened = res);
  }

  public $isMenuOpened(): Observable<boolean> {
    return fromEvent(document, "touchend")
      .pipe(
        debounceTime(400),
        filter(_ => Boolean(this.drawer)),
        map(_ => this.drawer.nativeElement.isOpen() as boolean),
        distinctUntilChanged(),
        tap(open => open && window.innerWidth > 980 ? this.closeDrawer() : null)
      )
  }

  public openDrawer(): void {
    if (this.drawer) {
      try {
        if (this.drawer.nativeElement.isOpen()) {
          this.closeDrawer();
          return;
        }
        this.drawer.nativeElement.open();
        this.dropDownOpened = true;
      } catch (err) { console.log(err); }
    }
  }

  public closeDrawer(): void {
    if (this.drawer) {
      try {
        if (!this.drawer.nativeElement.isOpen()) {
          this.openDrawer();
          return;
        }
        this.drawer.nativeElement.close();
        this.dropDownOpened = false;
      } catch (err) { console.log(err); }
    }
  }

  public goToCalc(): void {
    this.menuTrigger.closeMenu();
    this.router.navigateByUrl("/calculators");
  }

}
