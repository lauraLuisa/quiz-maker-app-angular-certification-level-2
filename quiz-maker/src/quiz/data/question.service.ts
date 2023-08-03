import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { TriviaCategory, TriviaCategoryResponse } from '../entitiy/types/trivia-category';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {

    protected _apiUrl = 'https://opentdb.com/';

    constructor(
        protected readonly _http: HttpClient,
    ) { }

    public getAllQuestionCategories(): Observable<Array<TriviaCategory>> {
        const url = `${ this._apiUrl }/api_category.php`;

        return this._http.get<TriviaCategoryResponse>(url)
            .pipe(
                map(response => response.trivia_categories),
                catchError(this._handleError<Array<TriviaCategory>>([])),
            );
    }

    protected _handleError<T>(result: T) {
        return (error: Error): Observable<T> => {
            console.error(error);

            return of(result);
        };
    }
}
