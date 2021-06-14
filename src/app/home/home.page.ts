import { Component } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import quotes from '../shared/quotes.json';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ]
} )
export class HomePage {
  quotes: any = quotes;
  user: User = { username: '', didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };
  welcomeMessage: string;

  constructor(
    private router: Router,
    private userSrvc: UserService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.welcomeMessage = this.welcomeText();
    this.userSrvc.getUserInfo().then( user => this.user = user );
    this.shuffleArray( quotes );
  }
  ionViewWillEnter() {

    this.userSrvc.getUserInfo().then( user => this.user = user );
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

  async presentAlert() {
    const alert = await this.alertController.create( {
      cssClass: 'my-custom-class',
      header: 'Result:',
      message: 'You score suggests that you are.......\n Do you want to do the questionaire again?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.questionnaire();
          }
        }
      ]
    } );

    await alert.present();
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
