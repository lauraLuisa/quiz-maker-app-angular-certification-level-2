import { createAction, props } from '@ngrx/store';
import { MultipleChoiceQuestion } from '../entitiy/types/trivia-question';

export const loadQuestions = createAction(
    '[Questions] Load all questions',
    props<{categoryId: number; difficulty: string}>(),
    );

export const loadQuestionsSuccess = createAction(
    '[Questions] Load all questions success',
    props<{questions: Array<MultipleChoiceQuestion>}>(),
);

export const loadQuestionsFailure = createAction(
    '[Questions] Load all questions failure',
);

export const updateQuestion = createAction(
    '[Questions] Update question',
    props<{question: MultipleChoiceQuestion}>(),
);

export const resetQuestions = createAction(
    '[Questions] Reset Questions',
);
