import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizFilterComponent } from 'src/quiz/ui/quiz-filter/quiz-filter.component';
import { FilterValue } from 'src/quiz/entitiy/types/filter-value';
import { QuestionService } from 'src/quiz/data/question.service';
import { Observable, tap } from 'rxjs';
import { TriviaQuestion } from 'src/quiz/entitiy/types/trivia-question';
import { QuestionComponent } from 'src/quiz/ui/question/question.component';
import { Answer } from 'src/quiz/entitiy/types/answer';

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [
        CommonModule,
        QuizFilterComponent,
        QuestionComponent,
    ],
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {

    public questions$?: Observable<Array<TriviaQuestion>>;
    public isLoading = false;
    public answers: Array<Answer> = [];

    constructor(
        protected readonly _questionService: QuestionService,
    ) { }

    public loadQuiz(filterValue: FilterValue): void {
        this.isLoading = true;
        this.questions$ = this._questionService.getQuestions(filterValue.categoryId, filterValue.difficulty)
            .pipe(
                tap(() => this.isLoading = false),
            );
    }

    public addAnswer(answer: Answer): void {
        const index = this.answers.findIndex(answerEl => answer.question === answerEl.question);

        index === -1 ?
            this.answers.push(answer) :
            this.answers[index] = answer;
    }

    public trackByIndex(index: number): number {
        return index;
    }
}
