import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
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
        category: new FormControl<string | null>(null),
        difficulty: new FormControl<string | null>(null),
    });

    public categories$?: Observable<Array<TriviaCategory>>;

    public difficulies: Array<Difficulty> = [
        Difficulty.Easy,
        Difficulty.Medium,
        Difficulty.Hard,
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
        this.categories$ = this._questionService.getAllQuestionCategories()
            .pipe(
                tap(categories => this._category?.setValue(categories[0].name)),
            );

        this._difficulty?.setValue(this.difficulies[0]);
    }

    public onFormSubmit(): void {
        const category = this._category?.value;
        const difficulty = this._difficulty?.value;

        if(!category || !difficulty) {
            return;
        }

        this.newFilter.emit({ category, difficulty });
    }

    public trackByIndex(index: number): number {
        return index;
    }
}
