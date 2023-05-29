import { TestBed } from '@angular/core/testing';

import { CookingCardService } from './cooking-card.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { cookingCardStub } from 'src/stubs/cookingCardStub';

describe('CookingCardService', () => {
  let service: CookingCardService;
  let httpMock: HttpTestingController;
  let mockCookingCardsUrl = 'http://localhost:3000/api/v1/cooking-cards'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
    ]
    });
    service = TestBed.inject(CookingCardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all cards', () => {
    const testData = cookingCardStub;  

    service.getCookingCards().subscribe(data =>
      expect(data).toEqual(testData)
    );

    const req = httpMock.expectOne(request => 
      request.method === 'GET' &&
      request.url === mockCookingCardsUrl  
    );

    req.flush(testData);
  })

  it('should add new card', () => {
    const testData = cookingCardStub;
    const mockCard = {
      name: 'test',
      time: 33,
      temperature: 444,
      rack: false,
      mode: 'Air Fryer',
      numbBasket: 1,
  }

    service.addCookingCard(mockCard).subscribe()

    const req = httpMock.expectOne(request => 
      request.method === 'POST' &&
      request.url === mockCookingCardsUrl  
    ); 

    req.flush(testData);
  })
});
