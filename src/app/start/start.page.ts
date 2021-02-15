import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { IonSlides, } from '@ionic/angular';

@Component( {
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: [ './start.page.scss' ],
} )

export class StartPage implements OnInit {
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
  };
}
