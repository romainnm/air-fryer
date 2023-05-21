import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingCardService } from '../services/cooking-card.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cookingCards$ = this.cookingCardService.getCookingCards();

  constructor(
    public cookingCardService: CookingCardService
  ){};



}
