import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-quiz-filter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quiz-filter.component.html',
    styleUrls: ['./quiz-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizFilterComponent {

}
