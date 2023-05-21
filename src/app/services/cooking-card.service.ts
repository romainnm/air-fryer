import { Injectable } from '@angular/core';
import { ICookingCard } from '../interfaces/cooking-card.interface';
import { Observable, of } from 'rxjs'
import { cookingCardStub } from 'src/stubs/cookingCardStub';

@Injectable({
  providedIn: 'root'
})
export class CookingCardService {

  constructor() { }

  getCookingCards(): Observable<ICookingCard[]>{
    return of(cookingCardStub)
  }
}
