import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeltypeComponent } from './modeltype.component';

describe('ModeltypeComponent', () => {
  let component: ModeltypeComponent;
  let fixture: ComponentFixture<ModeltypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeltypeComponent]
    });
    fixture = TestBed.createComponent(ModeltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
