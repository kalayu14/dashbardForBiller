import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';

import { UpdateOneBillerRangeComponent } from './update-one-biller-range.component';

describe('UpdateOneBillerRangeComponent', () => {
  let component: UpdateOneBillerRangeComponent;
  let fixture: ComponentFixture<UpdateOneBillerRangeComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOneBillerRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneBillerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
