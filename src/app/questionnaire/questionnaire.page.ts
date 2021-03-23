import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, } from '@ionic/angular';
import questions from '../shared/questions.json';
import { UserService } from '../services/user.service';

@Component( {
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: [ './questionnaire.page.scss' ],
} )
export class QuestionnairePage implements OnInit {

  user: User;
  assesmentForm: FormGroup;
  errMess: String;
  questions: any = questions;
  frequency_answer: number = 0;
  intencity_answer: number = 0;
  result: number = 0;

  constructor( private storage: Storage,
    private usrSrv: UserService,
    private router: Router,
    private formBuilder: FormBuilder ) {
    this.assesmentForm = this.formBuilder.group( {
      frequency_answer: [ 0, Validators.required ],
      intencity_answer: [ 0, Validators.required ]
    } );
    this.usrSrv.getUserInfo().then( user => this.user = user );
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
    this.result += this.assesmentForm.value.frequency_answer + this.assesmentForm.value.intencity_answer;
    console.log( this.assesmentForm.value, this.result );
    this.assesmentForm.reset({
      frequency_answer :0,
      intencity_answer :0 });
    this.nextSlide();
  }
  restart() {
    this.result = 0;
    this.slides.slideTo( 0 );
  }
 
  finish() {
    this.user.firstTestScore = this.result;
    if ( this.result ) {
      this.user.didTheInitialTest = true;
    }
    this.storage.set( 'user', this.user );
    this.router.navigateByUrl( '/tabs/home' );
  }
}
