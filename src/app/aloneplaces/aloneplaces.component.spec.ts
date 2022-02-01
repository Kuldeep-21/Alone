import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloneplacesComponent } from './aloneplaces.component';

describe('AloneplacesComponent', () => {
  let component: AloneplacesComponent;
  let fixture: ComponentFixture<AloneplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloneplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloneplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
