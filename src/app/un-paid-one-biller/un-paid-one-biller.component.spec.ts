import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPaidOneBillerComponent } from './un-paid-one-biller.component';

describe('UnPaidOneBillerComponent', () => {
  let component: UnPaidOneBillerComponent;
  let fixture: ComponentFixture<UnPaidOneBillerComponent>;

  beforeEach(waitForAsync () => {
    await TestBed.configureTestingModule({
      declarations: [ UnPaidOneBillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPaidOneBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
