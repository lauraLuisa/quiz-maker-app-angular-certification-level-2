export interface MultipleChoiceQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    options: Array<string>;
    selectedAnswer: null | string;
}
export interface TriviaMultipleChoiceQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}
export interface TriviaQuestionResponse {
    response_code: number;
    results: Array<TriviaMultipleChoiceQuestion>;
}
