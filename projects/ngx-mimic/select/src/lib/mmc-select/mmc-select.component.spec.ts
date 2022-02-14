import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmcSelectComponent } from './mmc-select.component';

describe('MmcSelectComponent', () => {
  let component: MmcSelectComponent<any>;
  let fixture: ComponentFixture<MmcSelectComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmcSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
