import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { IonSlides, } from '@ionic/angular';
import { FormControl, FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';

@Component( {
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: [ './intro.page.scss' ],
} )

export class IntroPage implements OnInit {
  isSubmitted = false;
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  usernameFormControl: FormControl;
  usernameForm: FormGroup;


  formErrors = {
    'username': ''
  };

  validationMessages = {
    'username': {
      'required': 'Your name is required.',
      'minlength': 'Your name must be at least 3 characters long.',
      'maxlength': 'Your name cannot be more than 10 characters long.',
      'pattern': 'Contain not allowed characters. '
    }
  }
  constructor( private storage: Storage,
    private router: Router,
    private fbBuilder: FormBuilder ) {
    this.usernameForm = this.fbBuilder.group( {
      username: [ '', [ Validators.required, Validators.minLength( 3 ), Validators.maxLength( 10 ), Validators.pattern( '^[a-zA-Z]+$' ) ] ]
    } );
    this.usernameForm.valueChanges.subscribe( data => this.onValueChangedData( data ) );
  }

  ngOnInit() { }

  onValueChangedData( data?: any ) {
    if ( !this.usernameForm ) { return; }
    const form = this.usernameForm;
    for ( const field in this.formErrors ) {
      if ( this.formErrors.hasOwnProperty( field ) ) {
        //clear previous error message
        this.formErrors[ field ] = '';
        const control = form.get( field );
        if ( control && control.dirty && !control.valid ) {
          const messages = this.validationMessages[ field ];
          for ( const key in control.errors ) {
            if ( control.errors.hasOwnProperty( key ) ) {
              this.formErrors[ field ] += messages[ key ] + ' ';
            }
          }
        }
      }
    }
  }


  get errorControl() {
    return this.usernameForm.controls;
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
    allowSlideNext: false
  };

  @ViewChild( 'slides' ) slides: IonSlides;

  nextSlide() {
    this.slides.lockSwipeToNext( false );
    this.slides.slideNext();

  };
  onSumbit() {
    this.isSubmitted = true;
    if ( this.usernameForm.valid ) {
      this.user.username = this.usernameForm.value.username;
      this.storage.set( 'user', this.user );
      this.nextSlide();
    } else
      console.log( 'Please provide all the required values!' );
  }
  endIntro() {
    this.router.navigateByUrl( "tabs/home" );
  }
  doQuestionnaire() {
    this.router.navigateByUrl( '/questionnaire' );
  }
}
