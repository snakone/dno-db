import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBuildComponent } from './skill-build.component';

describe('SkillBuildComponent', () => {
  let component: SkillBuildComponent;
  let fixture: ComponentFixture<SkillBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
