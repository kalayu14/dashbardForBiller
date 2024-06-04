import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneBillerComponent } from './update-one-biller.component';

describe('UpdateOneBillerComponent', () => {
  let component: UpdateOneBillerComponent;
  let fixture: ComponentFixture<UpdateOneBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOneBillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOneBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
