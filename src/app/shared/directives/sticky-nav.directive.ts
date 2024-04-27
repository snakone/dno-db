import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, filter, from } from 'rxjs';

@Directive({ selector: '[StickyNav]' })

export class NavDirective implements AfterViewInit {

  scroll = 10;
  css!: DOMTokenList;

  constructor(
    private el: ElementRef,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.stickyNavbar();
    this.showNavOnNavigation();
    this.css = this.el?.nativeElement.classList || null;
  }

  private stickyNavbar(): void {
    fromEvent(window, 'scroll').subscribe(_ => {
      const current = window.scrollY;
      this.checkScroll(current);
      this.scroll = current;
    });
  }

  private checkScroll(current: number): void {
    if (!this.css) { return; }

    if (current > this.scroll && !this.css.contains('scroll-down')) {
      this.css.add('scroll-down');
    }

    if (this.css.contains('scroll-down') && (this.scroll < 100)) {
      this.css.remove('scroll-down');
    }
  }

  private showNavOnNavigation(): void {
    from(this.router.events)
      .pipe(
        filter((e): e is NavigationEnd => (
          e instanceof NavigationEnd && !!this.el
        )),
      )
      .subscribe(_ => this.el.nativeElement.classList.remove('scroll-down'));
  }

}
