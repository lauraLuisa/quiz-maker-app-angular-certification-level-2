import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { TriviaCategory, TriviaCategoryResponse } from '../entitiy/types/trivia-category';
import { MultipleChoiceQuestion, TriviaMultipleChoiceQuestion, TriviaQuestionResponse } from '../entitiy/types/trivia-question';

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
                shareReplay(),
            );
    }

    public getQuestions(categoryId: number, difficulty: string, numberOfQuestions = 5): Observable<Array<MultipleChoiceQuestion>> {
        const url = `${ this._apiUrl }/api.php?amount=${ numberOfQuestions }
            &category=${ categoryId }&difficulty=${ difficulty }&type=multiple`;

        return this._http.get<TriviaQuestionResponse>(url)
            .pipe(
                map(response => response.results.map(question => this._formatQuestion(question))),
            );
    }

    protected _formatQuestion(triviaQuestion: TriviaMultipleChoiceQuestion): MultipleChoiceQuestion {
        const { category, type, difficulty, question, correct_answer } = triviaQuestion;

        return {
            category,
            type,
            difficulty,
            question,
            correct_answer,
            options: this._combineOptions(triviaQuestion),
            selectedAnswer: null,
        };
    }

    protected _handleError<T>(result: T) {
        return (error: Error): Observable<T> => {
            console.error(error);

            return of(result);
        };
    }

    protected _combineOptions(question: TriviaMultipleChoiceQuestion): Array<string> {
        const combinedOptions = [question.correct_answer, ...question.incorrect_answers];

        return this._shuffleOptions(combinedOptions);
    }

    //Fisher-Yates algorithm
    protected _shuffleOptions(options: Array<string>): Array<string> {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = options[i];

            options[i] = options[j];
            options[j] = temp;
        }

        return options;
    }
}
