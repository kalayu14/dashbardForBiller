import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidOneBillerComponent } from './paid-one-biller.component';

describe('PaidOneBillerComponent', () => {
  let component: PaidOneBillerComponent;
  let fixture: ComponentFixture<PaidOneBillerComponent>;

  beforeEach(waitForAsync () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidOneBillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidOneBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
