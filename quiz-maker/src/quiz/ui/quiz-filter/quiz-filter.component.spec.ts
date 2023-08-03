import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFilterComponent } from './quiz-filter.component';

describe('QuizFilterComponent', () => {
    let component: QuizFilterComponent;
    let fixture: ComponentFixture<QuizFilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [QuizFilterComponent],
        });
        fixture = TestBed.createComponent(QuizFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
