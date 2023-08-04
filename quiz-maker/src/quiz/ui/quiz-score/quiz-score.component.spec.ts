import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoreComponent } from './quiz-score.component';

describe('QuizScoreComponent', () => {
    let component: QuizScoreComponent;
    let fixture: ComponentFixture<QuizScoreComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [QuizScoreComponent],
        });
        fixture = TestBed.createComponent(QuizScoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
