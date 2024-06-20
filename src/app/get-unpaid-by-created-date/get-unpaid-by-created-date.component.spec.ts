import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';

import { GetUnpaidByCreatedDateComponent } from './get-unpaid-by-created-date.component';

describe('GetUnpaidByCreatedDateComponent', () => {
  let component: GetUnpaidByCreatedDateComponent;
  let fixture: ComponentFixture<GetUnpaidByCreatedDateComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ GetUnpaidByCreatedDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUnpaidByCreatedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
