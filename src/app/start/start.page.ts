import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, } from '@ionic/angular';

@Component( {
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: [ './start.page.scss' ],
} )
export class StartPage implements OnInit {
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  assesmentForm1: FormGroup;
  assesmentForm2: FormGroup;

 
  constructor( private storage: Storage,
    private router: Router,
    private formBuilder: FormBuilder ) {
    this.assesmentForm1 = this.formBuilder.group( {
      username: [ '', Validators.required ],
    } )
  }

  ngOnInit() {
    this.storage.get( 'user' ).then( user => {
      if ( user ) {
        console.log( user );
        this.user = user;
        if ( this.user.didTheInitialTest == true ) {
          this.router.navigateByUrl( '/tab' );
        }
      }
      else
        console.log( 'user not defined' );
    } );
  }
  onSumbit() {

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
  

}
