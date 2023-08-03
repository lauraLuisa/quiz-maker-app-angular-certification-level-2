import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/quiz/data/question.service';
import { TriviaCategory } from 'src/quiz/entitiy/types/trivia-category';
import { Difficulty } from 'src/quiz/entitiy/enums/difficulty';
import { FilterValue } from 'src/quiz/entitiy/types/filter-value';

@Component({
    selector: 'app-quiz-filter',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './quiz-filter.component.html',
    styleUrls: ['./quiz-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizFilterComponent implements OnInit{

    @Output() public readonly newFilter = new EventEmitter<FilterValue>();

    public quizFilterForm = new FormGroup({
        category: new FormControl<number | null>(null, Validators.required),
        difficulty: new FormControl<string | null>(null, Validators.required),
    });

    public categories$?: Observable<Array<TriviaCategory>>;

    public difficulies: Array<{value: Difficulty; name: string}> = [
        { value: Difficulty.Easy, name: 'Easy' },
        { value: Difficulty.Medium, name: 'Medium' },
        { value: Difficulty.Hard, name: 'Hard' },
    ];

    constructor(
        protected readonly _questionService: QuestionService,
    ) {}

    protected get _category(): FormControl {
        return this.quizFilterForm.get('category') as FormControl;
    }

    protected get _difficulty(): FormControl {
        return this.quizFilterForm.get('difficulty') as FormControl;
    }

    public ngOnInit(): void {
        this.categories$ = this._questionService.getAllQuestionCategories();
    }

    public onFormSubmit(): void {
        const categoryId = Number(this._category?.value);
        const difficulty = this._difficulty?.value;

        this.newFilter.emit({ categoryId, difficulty });
    }

    public trackByIndex(index: number): number {
        return index;
    }
}
