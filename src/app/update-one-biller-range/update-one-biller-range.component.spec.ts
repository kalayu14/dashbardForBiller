import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneBillerRangeComponent } from './update-one-biller-range.component';

describe('UpdateOneBillerRangeComponent', () => {
  let component: UpdateOneBillerRangeComponent;
  let fixture: ComponentFixture<UpdateOneBillerRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOneBillerRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOneBillerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
