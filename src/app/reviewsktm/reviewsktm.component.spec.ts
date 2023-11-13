import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsktmComponent } from './reviewsktm.component';

describe('ReviewsktmComponent', () => {
  let component: ReviewsktmComponent;
  let fixture: ComponentFixture<ReviewsktmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsktmComponent]
    });
    fixture = TestBed.createComponent(ReviewsktmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
