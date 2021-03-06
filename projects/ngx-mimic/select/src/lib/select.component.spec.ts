import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmcSelect } from './select.component';

describe('SelectComponent', () => {
  let component: MmcSelect;
  let fixture: ComponentFixture<MmcSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmcSelect ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmcSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
