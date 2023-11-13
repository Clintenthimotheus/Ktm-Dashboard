import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartComponent } from './area-chart.component';

describe('AreaChartComponent', () => {
  let component: AreaChartComponent;
  let fixture: ComponentFixture<AreaChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaChartComponent]
    });
    fixture = TestBed.createComponent(AreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
