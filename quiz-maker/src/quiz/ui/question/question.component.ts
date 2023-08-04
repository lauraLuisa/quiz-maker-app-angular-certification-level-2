import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleChoiceQuestion } from 'src/quiz/entitiy/types/trivia-question';

@Component({
    selector: 'app-question',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {

    @Input() public question?: MultipleChoiceQuestion;
    @Output() public readonly newAnswer = new EventEmitter<MultipleChoiceQuestion>();

    public onOptionClick(option: string): void {
        if(!this.question) {
            return;
        }

        const updatedAnswer: MultipleChoiceQuestion = { ...this.question, selectedAnswer: option };

        this.newAnswer.emit(updatedAnswer);
    }

    public trackByIndex(index: number): number {
        return index;
    }
}
