import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuidesComponent } from './home-guides.component';

describe('HomeGuidesComponent', () => {
  let component: HomeGuidesComponent;
  let fixture: ComponentFixture<HomeGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGuidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
