import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleChoiceQuestion } from 'src/quiz/entitiy/types/trivia-question';

@Component({
    selector: 'app-quiz-score',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quiz-score.component.html',
    styleUrls: ['./quiz-score.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizScoreComponent implements OnInit {

    @Input() public questions: Array<MultipleChoiceQuestion> = [];

    public correctAnswerCount = 0;

    public ngOnInit(): void {
        this.correctAnswerCount = this._getCorrectAnswerCount(this.questions);
    }

    protected _getCorrectAnswerCount(questions: Array<MultipleChoiceQuestion>): number {
        return questions.reduce((count, question) => question.correct_answer === question.selectedAnswer ? count + 1 : count, 0);
      }
}
