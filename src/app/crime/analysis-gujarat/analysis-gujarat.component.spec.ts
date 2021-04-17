import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGujaratComponent } from './analysis-gujarat.component';

describe('AnalysisGujaratComponent', () => {
  let component: AnalysisGujaratComponent;
  let fixture: ComponentFixture<AnalysisGujaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisGujaratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisGujaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
