import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaQuestion } from 'src/quiz/entitiy/types/trivia-question';
import { Answer } from 'src/quiz/entitiy/types/answer';

@Component({
    selector: 'app-question',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {

    @Input() public question?: TriviaQuestion;
    @Output() public readonly newAnswer = new EventEmitter<Answer>();

    public options: Array<string> = [];
    public selectedAnswer?: Answer;

    public ngOnInit(): void {
        if (!this.question) {
            return;
        }

        this.options = this._combineOptions(this.question);
    }

    public onOptionClick(option: string): void {
        if(!this.question) {
            return;
        }

        const answer: Answer = {
            question: this.question.question,
            answer: option,
            isCorrect: option === this.question.correct_answer,
        };

        this.selectedAnswer = answer;
        this.newAnswer.emit(answer);
    }

    public trackByIndex(index: number): number {
        return index;
    }

    protected _combineOptions(question: TriviaQuestion): Array<string> {
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
