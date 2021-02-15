import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, } from '@ionic/angular';
import questions from '../shared/questions.json';

@Component( {
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: [ './start.page.scss' ],
} )
  
export class StartPage implements OnInit {
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  assesmentForm1: FormGroup;
  assesmentForm2: FormGroup;
  errMess: String;
  questions: any = questions;
  answer: number;
  result: number = 0;
  username: string;

  constructor( private storage: Storage,
    private router: Router) {}

  ngOnInit() { } 

  onSumbit() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };

  @ViewChild( 'slides' ) slides: IonSlides;

  nextSlide() {
    this.slides.slideNext();
  };

  selectAnswer( question, value ) {
    console.log( question, value, this.answer,this.result );
    this.result += parseInt(value);
    this.nextSlide();
  }
  finish() {
    this.user.firstTestScore = this.result;
    this.user.username = this.username;
    if ( this.result ) {
      this.user.didTheInitialTest = true;
    }
    this.storage.set( 'user', this.user );
    console.log( this.user );
    this.router.navigateByUrl( '/tabs/tab1' );
  }
}
