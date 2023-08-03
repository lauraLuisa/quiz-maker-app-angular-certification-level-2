import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizFilterComponent } from 'src/quiz/ui/quiz-filter/quiz-filter.component';
import { FilterValue } from 'src/quiz/entitiy/types/filter-value';

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [
        CommonModule,
        QuizFilterComponent,
    ],
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {

    public createQuiz(filterValue: FilterValue): void {
        console.info(filterValue);
    }
}
