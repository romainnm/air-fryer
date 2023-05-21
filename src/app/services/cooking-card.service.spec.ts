import { TestBed } from '@angular/core/testing';

import { CookingCardService } from './cooking-card.service';

describe('CookingCardService', () => {
  let service: CookingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
