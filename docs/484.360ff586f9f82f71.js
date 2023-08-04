"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[484],{5484:(Q,c,o)=>{o.r(c),o.d(c,{QuizResultsComponent:()=>h});var i=o(6814),a=o(9397),l=o(9166),p=o(2639),m=o(5491),t=o(5879);let g=(()=>{class n{constructor(){this.questions=[],this.correctAnswerCount=0}ngOnInit(){this.correctAnswerCount=this._getCorrectAnswerCount(this.questions)}_getCorrectAnswerCount(e){return e.reduce((s,u)=>u.correct_answer===u.selectedAnswer?s+1:s,0)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-quiz-score"]],inputs:{questions:"questions"},standalone:!0,features:[t.jDz],decls:3,vars:3,consts:[[1,"score",3,"ngClass"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.qZA()()),2&e&&(t.Q6J("ngClass",s.correctAnswerCount>=4?"success":s.correctAnswerCount>=2?"warning":"error"),t.xp6(2),t.AsE("You scored ",s.correctAnswerCount," out of ",s.questions.length,""))},dependencies:[i.ez,i.mk],styles:[".score[_ngcontent-%COMP%]{padding:5px 20px;margin:35px 0;border-radius:5px}"],changeDetection:0}),n})();var d=o(8602),C=o(5961);function f(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-question",5),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("question",e)("isDisabled",!0)}}function z(n,r){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,f,2,2,"ng-container",3),t._UZ(2,"app-quiz-score",4),t.qZA()),2&n){const e=r.ngIf,s=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",s.trackByIndex),t.xp6(1),t.Q6J("questions",e)}}let h=(()=>{class n{constructor(e,s){this._store$=e,this._router=s,this.questions$=this._store$.select(l.E4).pipe((0,a.b)(u=>{u||this._router.navigate([""])}))}restartQuiz(){this._store$.dispatch((0,m.PN)()),this._router.navigate([""])}trackByIndex(e){return e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.yh),t.Y36(C.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-quiz-results"]],standalone:!0,features:[t.jDz],decls:6,vars:3,consts:[["class","questions",4,"ngIf"],[1,"full-width","primary",3,"click"],[1,"questions"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"questions"],[3,"question","isDisabled"]],template:function(e,s){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Quiz Results"),t.qZA(),t.YNc(2,z,3,3,"div",0),t.ALo(3,"async"),t.TgZ(4,"button",1),t.NdJ("click",function(){return s.restartQuiz()}),t._uU(5,"Create a new Quiz"),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,s.questions$)))},dependencies:[i.ez,i.sg,i.O5,i.Ov,p.Y,g],styles:[".questions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;margin:30px 0}"],changeDetection:0}),n})()}}]);