import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { questionsReducer } from 'src/quiz/store/questions.reducert';
import { EffectsModule } from '@ngrx/effects';
import { QuestionsEffects } from 'src/quiz/store/questions.effects';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({ questions: questionsReducer }),
        EffectsModule.forRoot([QuestionsEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
