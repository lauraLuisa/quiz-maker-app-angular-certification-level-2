export interface TriviaCategory {
    id: number;
    name: string;
}

export interface TriviaCategoryResponse {
    trivia_categories: Array<TriviaCategory>;
}
