import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page'
import { UserService } from '../services/user.service';
import { User } from '../shared/user';

@Component( {
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: [ 'journal.page.scss' ]
} )
export class JournalPage {
  user: User = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };

  constructor( private modalCtrl: ModalController,
    private userSrv: UserService ) {
    this.userSrv.getUserInfo().then( user => this.user = user );
    this.userSrv.addDummydata();
  }
  addDummyData() {
    console.log( "insert dummy data" );
    if ( this.user.everyDayScore != null ) {
      this.user.everyDayScore.push( { date: "15/8/2020", score: 6 } );
      console.log( this.user, "+1 entry" );
    }
    this.userSrv.updateUserInfo( this.user );
  }

  ionViewWillEnter() {
    this.userSrv.getUserInfo().then( user => this.user = user );

  }
  async presentJournEntryModal() {
    const modal = await this.modalCtrl.create( {
      component: JournalEntryPage,
      cssClass: "modal-fullscreen"
    } );
    return await modal.present();
  }

  onChange( $event ) {
    console.log( $event );
  }

}
