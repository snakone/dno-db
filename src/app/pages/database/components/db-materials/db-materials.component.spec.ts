import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMaterialsComponent } from './db-materials.component';

describe('DbMaterialsComponent', () => {
  let component: DbMaterialsComponent;
  let fixture: ComponentFixture<DbMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
