import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingCardService } from '../services/cooking-card.service';
import { map } from 'rxjs';
import { ICookingCard } from '../interfaces/cooking-card.interface';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    cookingCards$ = this.getCookingCards();
    showCardDetails = false;

    constructor(
        public cookingCardService: CookingCardService
    ) { };

    ngOnInit() {}

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
}