import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { MultipleChoiceQuestion } from 'src/quiz/entitiy/types/trivia-question';
import { selectQuestions } from 'src/quiz/store/questions.selectors';
import { QuestionComponent } from 'src/quiz/ui/question/question.component';
import { Router } from '@angular/router';
import { resetQuestions } from 'src/quiz/store/questions.action';
import { QuizScoreComponent } from 'src/quiz/ui/quiz-score/quiz-score.component';

@Component({
    selector: 'app-quiz-results',
    standalone: true,
    imports: [
        CommonModule,
        QuestionComponent,
        QuizScoreComponent,
    ],
    templateUrl: './quiz-results.component.html',
    styleUrls: ['./quiz-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizResultsComponent {

    public questions$?: Observable<Array<MultipleChoiceQuestion> | undefined>;

    constructor(
        protected readonly _store$: Store,
        protected readonly _router: Router,
    ) {
        this.questions$ = this._store$.select(selectQuestions)
            .pipe(
                tap(questions => {
                    if(!questions) {
                        this._router.navigate(['']);
                    }
                }),
            );
    }

    public restartQuiz(): void {
        this._store$.dispatch(resetQuestions());
        this._router.navigate(['']);
    }

    public trackByIndex(index: number): number {
        return index;
    }
}
