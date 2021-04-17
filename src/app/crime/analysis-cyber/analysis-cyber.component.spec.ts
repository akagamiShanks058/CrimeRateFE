import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCyberComponent } from './analysis-cyber.component';

describe('AnalysisCyberComponent', () => {
  let component: AnalysisCyberComponent;
  let fixture: ComponentFixture<AnalysisCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisCyberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
