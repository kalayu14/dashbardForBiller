import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnpaidBillsComponent } from './all-unpaid-bills.component';

describe('AllUnpaidBillsComponent', () => {
  let component: AllUnpaidBillsComponent;
  let fixture: ComponentFixture<AllUnpaidBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllUnpaidBillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUnpaidBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
