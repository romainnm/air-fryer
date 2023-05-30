import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingCardComponent } from './cooking-card.component';

describe('CookingCardComponent', () => {
  let component: CookingCardComponent;
  let fixture: ComponentFixture<CookingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CookingCardComponent]
    });
    fixture = TestBed.createComponent(CookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
