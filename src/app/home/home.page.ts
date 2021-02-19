import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import quotes from '../shared/quotes.json';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ]
} )
export class HomePage {
  quotes: any = quotes;
  user: User = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };

  constructor( private storage: Storage,
    private router: Router,
  ) {
    this.storage.get( 'user' ).then( user => {
      if ( user ) {
        this.user = user;
      }
    } );
  }

  ngOnInit() {

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

  // async presentQuestionnaireModal() {
  //   const modal = await this.modalCtrl.create( {
  //     component: QuestionnairePage
  //   } );
  //   return await modal.present();
  // }
  questionnaire() {
    this.router.navigateByUrl( 'questionnaire' );
  }
}
