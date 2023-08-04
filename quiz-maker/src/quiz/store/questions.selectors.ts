import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionState } from './questions.reducert';

export const selectQuestionsSelector = createFeatureSelector<QuestionState>('questions');

export const selectQuestions = createSelector(
    selectQuestionsSelector,
    (state: QuestionState) => state.questions,
);

export const selectLoadingStatus = createSelector(
    selectQuestionsSelector,
    (state: QuestionState) => state.status,
);
