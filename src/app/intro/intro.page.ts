import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { IonSlides, } from '@ionic/angular';

@Component( {
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: [ './intro.page.scss' ],
} )

export class IntroPage implements OnInit {
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };

  username: string;

  constructor( private storage: Storage,
    private router: Router) { }

  ngOnInit() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };

  @ViewChild( 'slides' ) slides: IonSlides;

  nextSlide() {
    this.slides.slideNext();
    this.user.username = this.username;
    this.storage.set( 'user', this.user );
  };
  
}
