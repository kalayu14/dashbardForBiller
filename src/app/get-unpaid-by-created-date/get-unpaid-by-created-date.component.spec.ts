import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUnpaidByCreatedDateComponent } from './get-unpaid-by-created-date.component';

describe('GetUnpaidByCreatedDateComponent', () => {
  let component: GetUnpaidByCreatedDateComponent;
  let fixture: ComponentFixture<GetUnpaidByCreatedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUnpaidByCreatedDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUnpaidByCreatedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
