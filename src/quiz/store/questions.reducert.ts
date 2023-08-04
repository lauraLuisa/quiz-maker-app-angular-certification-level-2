import { createReducer, on } from '@ngrx/store';
import { MultipleChoiceQuestion } from '../entitiy/types/trivia-question';
import { loadQuestions, loadQuestionsFailure, loadQuestionsSuccess, resetQuestions, updateQuestion } from './questions.action';
import { LoadingStatus } from 'src/shared/types/loading-status';

export interface QuestionState {
    questions: Array<MultipleChoiceQuestion> | undefined;
    status: LoadingStatus;
}

export const initialQuestionState: QuestionState = {
    questions: undefined,
    status: 'pending',
};


export const questionsReducer = createReducer(
    initialQuestionState,
    on(
        loadQuestions, (state): QuestionState => ({
            ...state,
            questions: undefined,
            status: 'loading',
        }),
    ),
    on(
        loadQuestionsSuccess,
        (state, { questions }): QuestionState => ({
            ...state,
            questions,
            status: 'success',
        }),
    ),
    on(
        loadQuestionsFailure,
        (state): QuestionState => ({
            ...state,
            status: 'error',
        }),
    ),
    on(
        updateQuestion,
        (state, { question }): QuestionState => ({
            ...state,
            questions: updateQuestions(state.questions, question),
        }),
    ),
    on(
        resetQuestions,
        (state): QuestionState => ({
            ...state,
            questions: undefined,
        }),
    ),
);

function updateQuestions(
    questions: Array<MultipleChoiceQuestion> | undefined,
    updatedQuestion: MultipleChoiceQuestion): Array<MultipleChoiceQuestion> | undefined {
    if(!questions) {
        return questions;
    }

    const updatedQuestions = [...questions];

    const index = updatedQuestions.findIndex(questionEl => questionEl.question === updatedQuestion.question);

    updatedQuestions[index] = updatedQuestion;

    return updatedQuestions;
}
