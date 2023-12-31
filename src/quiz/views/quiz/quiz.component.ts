import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizFilterComponent } from 'src/quiz/ui/quiz-filter/quiz-filter.component';
import { QuestionService } from 'src/quiz/data/question.service';
import { Observable, of, tap } from 'rxjs';
import { MultipleChoiceQuestion } from 'src/quiz/entitiy/types/trivia-question';
import { QuestionComponent } from 'src/quiz/ui/question/question.component';
import { Store } from '@ngrx/store';
import { selectLoadingStatus, selectQuestions } from 'src/quiz/store/questions.selectors';
import { LoadingStatus } from 'src/shared/types/loading-status';
import { FilterValue } from 'src/quiz/entitiy/types/filter-value';
import { loadQuestions, updateQuestion } from 'src/quiz/store/questions.action';
import { LoadingStatusComponent } from 'src/shared/ui/loading-status/loading-status.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [
        CommonModule,
        QuizFilterComponent,
        QuestionComponent,
        LoadingStatusComponent,
        RouterModule,
    ],
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {

    public questions$?: Observable<Array<MultipleChoiceQuestion> | undefined>;
    public loadingStatus$: Observable<LoadingStatus> = of('pending');

    public isSubmissionPossible = false;

    constructor(
        protected readonly _questionService: QuestionService,
        protected readonly _store$: Store,
    ) {
        this.questions$ = this._store$.select(selectQuestions)
            .pipe(
                tap(questions => {
                    if (!questions) {
                        return;
                    }

                    this.isSubmissionPossible = this._isQuizFullyAnswered(questions);
                }),
            );
        this.loadingStatus$ = this._store$.select(selectLoadingStatus);
    }

    public loadQuiz(filterValue: FilterValue): void {
        this._store$.dispatch(loadQuestions({
            categoryId: filterValue.categoryId,
            difficulty: filterValue.difficulty,
        }));
    }

    public updateQuestion(question: MultipleChoiceQuestion): void {
        this._store$.dispatch(updateQuestion({ question }));
    }

    public trackByIndex(index: number): number {
        return index;
    }

    protected _isQuizFullyAnswered(questions: Array<MultipleChoiceQuestion>): boolean {
        const index = questions.findIndex(question => question.selectedAnswer === null);

        return index === -1;
    }
}
