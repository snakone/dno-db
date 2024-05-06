import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { StorageService } from '@core/services/storage/storage.service';
import { HEADER_ITEMS } from '@shared/app.data';

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
  mode: string | undefined;

  constructor(private router: Router, private ls: StorageService) {}

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

  public toggleTheme(): void {
    const isDark = document.body.classList.toggle('dark');
    this.mode = isDark ? 'dark' : 'light';
    this.ls.setKey('theme', this.mode);
  }

  public navigate(route: string): void {
    this.closeDrawer();
    this.router.navigateByUrl(route);
  }

}
