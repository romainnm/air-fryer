import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CookingCardService } from '../services/cooking-card.service';
import { cookingCardStub, cookingCardWithShowStub } from '../../stubs/cookingCardStub';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockCookingCardService: jasmine.SpyObj<CookingCardService>;

    mockCookingCardService = jasmine.createSpyObj(['getCookingCards', 'addCookingCard']);
    mockCookingCardService.getCookingCards.and.returnValue(of(cookingCardStub));

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [ 
                HttpClientTestingModule,
                { provide: CookingCardService, useValue: mockCookingCardService } 
            ]
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('toggle the card details', () => {
        const id = 1;
        const currentShowList = true;

        component.toggleShowCardDetails(id, currentShowList)
        component.cookingCards$.subscribe(data => {
            expect(data).toEqual(cookingCardWithShowStub)
        })


    })
});
