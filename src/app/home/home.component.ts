import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingCardService } from '../services/cooking-card.service';
import { combineLatest, map, of, take } from 'rxjs';
import { ICookingCard } from '../interfaces/cooking-card.interface';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookingCardComponent } from '../shared/cooking-card/cooking-card.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CookingCardComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    cookingCards$ = this.getCookingCards();
    showCardDetails = false;
    cookingCardForm: any;

    constructor(
        public cookingCardService: CookingCardService,
        private fb: FormBuilder,
    ) { };

    ngOnInit() {
        this.cookingCardForm = this.fb.group({
            name: [''],
            time: [''],
            temperature: [''],
            rack: [''],
            mode: [''],
            numBasket: [''],
        })
    }

    getCookingCards() {
        return this.cookingCardService.getCookingCards().pipe(
            map(cards => cards.map((card: ICookingCard) => {
                return { ...card, showList: false }
            }))
        )
    }

    toggleShowCardDetails(id: number | undefined, currentShowList: boolean) {
        this.cookingCards$ = this.cookingCardService.getCookingCards().pipe(
            map(cards =>
                cards.map((card: ICookingCard) => {
                    if (card.id === id) {
                        return { ...card, showList: !currentShowList };
                    } else {
                        return { ...card, showList: false };
                    }
                })
            )
        );
    }

    onSubmit() {
        const mockCard = this.cookingCardForm.value
        if (mockCard) {
            this.cookingCardService.addCookingCard(mockCard).pipe(take(1)).subscribe()
        }

        this.cookingCards$ = this.getCookingCards()

        this.cookingCards$.pipe(take(1)).subscribe()
       
    }
}