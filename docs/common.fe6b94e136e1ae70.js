"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[592],{9166:(l,u,c)=>{c.d(u,{E4:()=>_,OL:()=>a});var n=c(8602);const o=(0,n.ZF)("questions"),_=(0,n.P1)(o,r=>r.questions),a=(0,n.P1)(o,r=>r.status)},2639:(l,u,c)=>{c.d(u,{Y:()=>p});var n=c(5879),o=c(6814);const _=function(s,i,e,t){return{primary:s,error:i,success:e,disabled:t}};function a(s,i){if(1&s){const e=n.EpF();n.ynx(0),n.TgZ(1,"button",4),n.NdJ("click",function(){const d=n.CHM(e).$implicit,m=n.oxw(2);return n.KtG(m.onOptionClick(d))}),n.qZA(),n.BQk()}if(2&s){const e=i.$implicit,t=n.oxw(2);n.xp6(1),n.Q6J("ngClass",n.l5B(2,_,t.question.selectedAnswer===e&&!t.isDisabled,t.question.selectedAnswer===e&&t.question.selectedAnswer!==t.question.correct_answer&&t.isDisabled,t.question.correct_answer===e&&t.isDisabled,t.isDisabled))("innerHTML",e,n.oJD)}}function r(s,i){if(1&s&&(n.TgZ(0,"div"),n._UZ(1,"p",1),n.TgZ(2,"div",2),n.YNc(3,a,2,7,"ng-container",3),n.qZA()()),2&s){const e=n.oxw();n.xp6(1),n.Q6J("innerHTML",e.question.question,n.oJD),n.xp6(2),n.Q6J("ngForOf",e.question.options)("ngForTrackBy",e.trackByIndex)}}let p=(()=>{class s{constructor(){this.newAnswer=new n.vpe}onOptionClick(e){if(!this.question)return;const t={...this.question,selectedAnswer:e};this.newAnswer.emit(t)}trackByIndex(e){return e}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-question"]],inputs:{question:"question",isDisabled:"isDisabled"},outputs:{newAnswer:"newAnswer"},standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"innerHTML"],[1,"options"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngClass","innerHTML","click"]],template:function(e,t){1&e&&n.YNc(0,r,4,3,"div",0),2&e&&n.Q6J("ngIf",t.question)},dependencies:[o.ez,o.mk,o.sg,o.O5],styles:[".options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:15px}"],changeDetection:0}),s})()}}]);