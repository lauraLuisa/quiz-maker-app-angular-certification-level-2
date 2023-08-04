import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStatusComponent } from './loading-status.component';

describe('LoadingStatusComponent', () => {
    let component: LoadingStatusComponent;
    let fixture: ComponentFixture<LoadingStatusComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoadingStatusComponent],
        });
        fixture = TestBed.createComponent(LoadingStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
