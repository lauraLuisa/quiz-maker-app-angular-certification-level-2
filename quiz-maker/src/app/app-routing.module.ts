import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'quiz',
        loadComponent: () => import('../quiz/views/quiz/quiz.component')
            .then(mod => mod.QuizComponent),
    },
    { path: '**', redirectTo: '/quiz' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
