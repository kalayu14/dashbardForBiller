import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidOneBillerComponent } from './unpaid-one-biller.component';

describe('UnpaidOneBillerComponent', () => {
  let component: UnpaidOneBillerComponent;
  let fixture: ComponentFixture<UnpaidOneBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnpaidOneBillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnpaidOneBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
