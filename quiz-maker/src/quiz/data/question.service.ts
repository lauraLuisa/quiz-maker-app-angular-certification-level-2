import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { TriviaCategory, TriviaCategoryResponse } from '../entitiy/types/trivia-category';
import { TriviaQuestion, TriviaQuestionResponse } from '../entitiy/types/trivia-question';

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

    public getQuestions(categoryId: number, difficulty: string, numberOfQuestions = 5): Observable<Array<TriviaQuestion>> {
        const url = `${ this._apiUrl }/api.php?amount=${ numberOfQuestions }
            &category=${ categoryId }&difficulty=${ difficulty }&type=multiple`;

        return this._http.get<TriviaQuestionResponse>(url)
            .pipe(
                map(response => response.results),
                catchError(this._handleError<Array<TriviaQuestion>>([])),
            );
    }

    protected _handleError<T>(result: T) {
        return (error: Error): Observable<T> => {
            console.error(error);

            return of(result);
        };
    }
}
