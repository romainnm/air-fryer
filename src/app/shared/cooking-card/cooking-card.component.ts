import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICookingCard } from 'src/app/interfaces/cooking-card.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cooking-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooking-card.component.html',
  styleUrls: ['./cooking-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookingCardComponent {
  @Input() cookingCards$!: Observable<ICookingCard[] | undefined>;
  // @Input() toggleShowCardDetails: any;

  ngOnInit() {
    // this.cookingCards$.subscribe(console.log)
  }
}
