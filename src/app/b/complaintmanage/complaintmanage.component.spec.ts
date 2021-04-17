import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintmanageComponent } from './complaintmanage.component';

describe('ComplaintmanageComponent', () => {
  let component: ComplaintmanageComponent;
  let fixture: ComponentFixture<ComplaintmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
