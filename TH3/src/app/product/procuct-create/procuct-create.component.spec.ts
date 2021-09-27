import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuctCreateComponent } from './procuct-create.component';

describe('ProcuctCreateComponent', () => {
  let component: ProcuctCreateComponent;
  let fixture: ComponentFixture<ProcuctCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuctCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuctCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
