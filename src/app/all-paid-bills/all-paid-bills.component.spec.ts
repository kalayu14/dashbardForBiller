import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaidBillsComponent } from './all-paid-bills.component';

describe('AllPaidBillsComponent', () => {
  let component: AllPaidBillsComponent;
  let fixture: ComponentFixture<AllPaidBillsComponent>;

  beforeEach(waitForAsync () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPaidBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaidBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
