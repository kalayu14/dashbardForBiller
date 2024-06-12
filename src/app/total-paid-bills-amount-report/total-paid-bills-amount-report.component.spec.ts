import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPaidBillsAmountReportComponent } from './total-paid-bills-amount-report.component';

describe('TotalPaidBillsAmountReportComponent', () => {
  let component: TotalPaidBillsAmountReportComponent;
  let fixture: ComponentFixture<TotalPaidBillsAmountReportComponent>;

  beforeEach(waitForAsync () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPaidBillsAmountReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPaidBillsAmountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
