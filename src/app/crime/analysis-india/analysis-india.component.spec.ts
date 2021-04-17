import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisIndiaComponent } from './analysis-india.component';

describe('AnalysisIndiaComponent', () => {
  let component: AnalysisIndiaComponent;
  let fixture: ComponentFixture<AnalysisIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisIndiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
