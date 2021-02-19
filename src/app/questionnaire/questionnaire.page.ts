import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, } from '@ionic/angular';
import questions from '../shared/questions.json';

@Component( {
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: [ './questionnaire.page.scss' ],
} )
export class QuestionnairePage implements OnInit {

  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  assesmentForm: FormGroup;
  errMess: String;
  questions: any = questions;
  frequency_answer: number;
  intencity_answer: number;
  result: number = 0;
  username: string;

  constructor( private storage: Storage,
    private router: Router,
    private formBuilder: FormBuilder ) {
    this.assesmentForm = this.formBuilder.group( {
      frequency_answer: [ '', Validators.required ],
      intencity_answer: [ '', Validators.required ]
    } );
  }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };

  @ViewChild( 'slides' ) slides: IonSlides;

  nextSlide() {
    this.slides.slideNext();
  };

  onSubmit() {
    
    this.result += parseInt( this.assesmentForm.value.frequency_answer );
    this.result += parseInt( this.assesmentForm.value.intencity_answer );
    console.log( this.assesmentForm.value, this.result, this.assesmentForm.value.frequency_answer, this.assesmentForm.value.intencity_answer );
    this.assesmentForm.reset();
    this.nextSlide();
  }
  restart() {
    this.result = 0;
    this.slides.slideTo( 1 );
  }
  exitQuestionnaire() {
    this.router.navigateByUrl( 'tabs/home' );
  }
  finish() {
    this.user.firstTestScore = this.result;
    this.user.username = this.username;
    if ( this.result ) {
      this.user.didTheInitialTest = true;
    }
    this.storage.set( 'user', this.user );
    this.router.navigateByUrl( '/tabs/home' );
  }
}
