import { Injectable } from '@angular/core';
import { ICookingCard } from '../interfaces/cooking-card.interface';
import { Observable, catchError, of, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CookingCardService {

    constructor(
        private http: HttpClient
    ) { }

    getCookingCards(): Observable<ICookingCard[]> {
        return this.http.get<any>('http://localhost:3000/api/v1/cooking-cards').pipe(
            catchError((err: HttpErrorResponse) => {
                return throwError(() => err)
            })
        )
    }

    addCookingCard(card: ICookingCard) {
        return this.http.post('http://localhost:3000/api/v1/cooking-cards', card).pipe(
            catchError((err: HttpErrorResponse) => {
                return throwError(() => err)
            })
        )
    }
}
