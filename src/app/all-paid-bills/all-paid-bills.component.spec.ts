import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaidBillsComponent } from './all-paid-bills.component';

describe('AllPaidBillsComponent', () => {
  let component: AllPaidBillsComponent;
  let fixture: ComponentFixture<AllPaidBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPaidBillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPaidBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
