import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentComponent } from './maincontent.component';

describe('MaincontentComponent', () => {
  let component: MaincontentComponent;
  let fixture: ComponentFixture<MaincontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincontentComponent]
    });
    fixture = TestBed.createComponent(MaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
