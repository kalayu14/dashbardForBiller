import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUnpaidDocumentComponent } from './total-unpaid-document.component';

describe('TotalUnpaidDocumentComponent', () => {
  let component: TotalUnpaidDocumentComponent;
  let fixture: ComponentFixture<TotalUnpaidDocumentComponent>;

  beforeEach(waitForAsync () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalUnpaidDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUnpaidDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
