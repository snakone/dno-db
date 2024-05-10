import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScalingComponent } from './class-scaling.component';

describe('ClassScalingComponent', () => {
  let component: ClassScalingComponent;
  let fixture: ComponentFixture<ClassScalingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassScalingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassScalingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
