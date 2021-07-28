import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page'
import { UserService } from '../services/user.service';
import { User } from '../shared/user';
import { ToastController } from '@ionic/angular';
import { Score } from '../shared/score';
import { PopoverComponent } from './popover/popover.component';
import { JournalEntryModalComponent } from '../modals/journal-entry-modal/journal-entry-modal.component';

@Component( {
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: [ 'journal.page.scss' ]
} )

export class JournalPage implements OnInit {
  user: User = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };
  customPickerOptions: any;
  selectedDate: String;
  score: Score[];

  constructor( private modalCtrl: ModalController,
    private userSrv: UserService, public toastController: ToastController,
    private popoverController: PopoverController ) {
    this.userSrv.getUserInfo().then( user => this.user = user );
    this.logDay( 0 );
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Cancel',

        },
        {
          text: 'Done',
          handler: ( selected ) => {
            if ( selected.month.value <= 10 ) {
              selected.month.value = '0' + selected.month.value
            }
            this.selectedDate = selected.year.value + '-' + selected.month.value + '-' + selected.day.value; console.log( this.selectedDate )
          }
        },
        {
          text: 'Now',
          handler: () => {
            let date = new Date().toISOString().split( "T" );
            this.selectedDate = date[ 0 ];
          }

        }
      ]
    }
  }

  logDay( number ) {
    switch ( number ) {
      case 0:
        let date = new Date().toISOString().split( "T" );
        this.selectedDate = date[ 0 ];
        this.score = this.userSrv.selectedDayLog( this.selectedDate );
        break;
      case 1:
        this.score = this.userSrv.selectedDayLog( this.selectedDate );
        break;
      default:
        break;
    }
  }

  ionViewWillEnter() {
    this.userSrv.getUserInfo().then( user => this.user = user );
    this.logDay( 0 );
  }

  ngOnInit() { }

  async presentJournalEntryModal() {
    const journalModal = await this.modalCtrl.create( {
      component: JournalEntryPage,
      cssClass: 'my-custom-modal-css',
    } );
    journalModal.present();
    var { data } = await journalModal.onDidDismiss();
    if ( data ) {
      this.user.everyDayScore.push( data.score );
      this.userSrv.updateUserInfo( this.user );
      this.presentToast( data.score );
      this.logDay( 0 );
    }
  }

  async presentJournalStatusModel( score?) {
    console.log( this.score );
    const journalStatus = await this.modalCtrl.create( {
      component: JournalEntryModalComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'existedScore': score
      }
    } );
    journalStatus.present();
    if ( this.selectedDate ) {
      this.logDay( 1 );
    } else {
      this.logDay( 0 );
    }
    //onsole.log( this.score );
  }
  async presentToast( score ) {
    const toast = await this.toastController.create( {
      header: 'Score',
      message: 'Your score is: ' + score.score,
      position: 'middle',
      duration: 2500
    } );
    toast.present();
  }

  async presentPopover( ev: any ) {
    const popover = await this.popoverController.create( {
      component: PopoverComponent,
      event: ev,
      translucent: true
    } );
    await popover.present();
  }

  moodSetImg( mood ) {
    mood = parseInt( mood );
    switch ( mood ) {
      case 0:
        return "assets/emojis/happy.png";
      case 1:
        return "assets/emojis/surprise.png";
      case 2:
        return "assets/emojis/sad.png";
      case 3:
        return "assets/emojis/anger.png";
      case 4:
        return "assets/emojis/fear.png";
      case 5:
        return "assets/emojis/disgust.png";
      case 6:
        return "assets/emojis/numb.png";
      default:
        return "assets/emojis/noEmotion.png";
    }
  }
}
