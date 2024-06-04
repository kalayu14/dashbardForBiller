import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPaidBillsAmountReportComponent } from './total-paid-bills-amount-report.component';

describe('TotalPaidBillsAmountReportComponent', () => {
  let component: TotalPaidBillsAmountReportComponent;
  let fixture: ComponentFixture<TotalPaidBillsAmountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPaidBillsAmountReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalPaidBillsAmountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
