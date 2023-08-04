/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { QuestionService } from '../data/question.service';
import { loadQuestions, loadQuestionsFailure, loadQuestionsSuccess } from './questions.action';
import { of } from 'rxjs';

@Injectable()
export class QuestionsEffects {
  constructor(
    protected _actions$: Actions,
    protected readonly _questionService: QuestionService,
  ) {}

    public loadQuestions$ = createEffect(() => this._actions$
        .pipe(
            ofType(loadQuestions),
            switchMap(action =>
                this._questionService.getQuestions(action.categoryId, action.difficulty)
                    .pipe(
                        map(questions => loadQuestionsSuccess({ questions })),
                        catchError(() => of(loadQuestionsFailure())),
                    ),
            ),
        ),
    );
}
