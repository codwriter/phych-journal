import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Score } from '../shared/score';
import { surveyQuestions } from '../shared/shortQuestions';

@Component( {
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: [ './journal-entry.page.scss' ],
} )
export class JournalEntryPage implements OnInit {
  questionsForm: FormGroup;
  score: Score = { date: "", comment: "", mood: 0, score: 0 };
  
  constructor( private modalCtrl: ModalController, private formBuilder: FormBuilder,public data:surveyQuestions ) {
    this.questionsForm = this.formBuilder.group( {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      mood: '',
      comment: ''
    } );
  }
  expandedQ1: boolean = true;
  expandedQ2: boolean = false;
  expandedQ3: boolean = false;
  expandedQ4: boolean = false;
  expandedQ5: boolean = false;
  expandedQ6: boolean = false;
  toggleQ1: string = "";
  toggleQ2: string = "ion-hide";
  toggleQ3: string = "ion-hide";
  toggleQ4: string = "ion-hide";
  toggleQ5: string = "ion-hide";
  toggleQ6: string = "ion-hide";

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  toggleViewQ1() {
    if ( this.expandedQ1 == false ) {
      this.toggleQ1 = "";
      this.expandedQ1 = !this.expandedQ1;
    }
    else {
      this.toggleQ1 = "ion-hide";
      this.expandedQ1 = !this.expandedQ1;
      this.toggleViewQ2();
    }
  }
  toggleViewQ2() {
    if ( this.expandedQ2 == false ) {
      this.toggleQ2 = "";
      this.expandedQ2 = !this.expandedQ2;
    }
    else {
      this.toggleQ2 = "ion-hide";
      this.expandedQ2 = !this.expandedQ2;
      this.toggleViewQ3();
    }
  }
  toggleViewQ3() {
    if ( this.expandedQ3 == false ) {
      this.toggleQ3 = "";
      this.expandedQ3 = !this.expandedQ3;
    }
    else {
      this.toggleQ3 = "ion-hide";
      this.expandedQ3 = !this.expandedQ3;
      this.toggleViewQ4();
    }
  }
  toggleViewQ4() {
    if ( this.expandedQ4 == false ) {
      this.toggleQ4 = "";
      this.expandedQ4 = !this.expandedQ4;
    }
    else {
      this.toggleQ4 = "ion-hide";
      this.expandedQ4 = !this.expandedQ4;
      this.toggleViewQ5();
    }
  }
  toggleViewQ5() {
    if ( this.expandedQ5 == false ) {
      this.toggleQ5 = "";
      this.expandedQ5 = !this.expandedQ5;
    }
    else {
      this.toggleQ5 = "ion-hide";
      this.expandedQ5 = !this.expandedQ5;
      this.toggleViewQ6();
    }
  }
  toggleViewQ6() {
    if ( this.expandedQ6 == false ) {
      this.toggleQ6 = "";
      this.expandedQ6 = !this.expandedQ6;
    }
    else {
      this.toggleQ6 = "ion-hide";
      this.expandedQ6 = !this.expandedQ6;
    }
  }

  calculateScore(values) {
    let sum=0;
    if (values.question1=="" )
      sum += 0;
    else
    { sum += parseInt( values.question1 ); }

    if ( values.question2 == "" )
      sum +=  0;
    else
    { sum += parseInt( values.question2 ); }

    if ( values.question3 == "" )
      sum +=  0;
    else
    { sum += parseInt( values.question3 ); }

    if ( values.question4 == "")
      sum +=  0;
    else
    { sum += parseInt( values.question4 ); }

    if ( values.question5 == "" )
      sum +=  0;
    else
    { sum += parseInt( values.question5 ); }

    if ( values.question6 == "" )
      sum +=  0;
    else
    { sum += parseInt( values.question6 ); }
    
    return sum;
    
  }

  formSubmit() {
    this.score.date = new Date().toISOString();
    this.score.score = this.calculateScore(this.questionsForm.value);
    if ( !this.questionsForm.value.mood )
      this.score.mood = -1;
    else
      this.score.mood = this.questionsForm.value.mood;

    if ( !this.questionsForm.value.comment )
      this.score.comment = " ";
    else
      this.score.comment = this.questionsForm.value.comment;
    console.log( this.score);
    this.modalCtrl.dismiss( { 'score': this.score } );
  }
}
 
