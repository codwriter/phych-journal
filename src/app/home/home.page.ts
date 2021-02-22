import { Component, ViewChild } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import quotes from '../shared/quotes.json';
import { UserService } from '../services/user.service';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ]
} )
export class HomePage {
  quotes: any = quotes;
  user: User={username:'',didTheInitialTest:false,everyDayScore:[],firstTestScore:0};
  welcomeMessage: string;
  constructor( private router: Router,
    private userSrvc:UserService,
  ) { }

  ngOnInit() {
    this.welcomeMessage = this.welcomeText();
    this.userSrvc.getUserInfo().then( user => this.user = user );
  }
  ionViewWillEnter() {
    this.shuffleArray( quotes );
  }

  shuffleArray( quotes ) {
    for ( let i = quotes.length - 1; i > 0; i-- ) {
      const j = Math.floor( Math.random() * ( i + 1 ) );
      [ quotes[ i ], quotes[ j ] ] = [ quotes[ j ], quotes[ i ] ];
    }
  }


  questionnaire() {
    this.router.navigateByUrl( 'questionnaire' );
  }

  welcomeText() {
    let myDate = new Date();
    let hrs = myDate.getHours();
    let greet;
    if ( hrs < 12 )
      return greet = "Good morning,";
    else if ( hrs >= 12 && hrs <= 17 )
      return greet = 'Good afternoon,';
    else if ( hrs >= 17 && hrs <= 24 )
      return greet = 'Good evening,';
  }

}
