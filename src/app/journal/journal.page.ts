import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page'
import { UserService } from '../services/user.service';
import { User } from '../shared/user';
import { ToastController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component( {
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: [ 'journal.page.scss' ]
} )

export class JournalPage {
  user: User = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };

  constructor( private modalCtrl: ModalController,
    private userSrv: UserService, public toastController: ToastController ) {
    this.userSrv.getUserInfo().then( user => this.user = user );
  }
  /*   addDummyData() {
      console.log( "insert dummy data" );
      if ( this.user.everyDayScore != null ) {
        this.user.everyDayScore.push( { date: "15/8/2020", score: 6,comment:"", mood:-1 } );
        console.log( this.user, "+1 entry" );
      }
      this.userSrv.updateUserInfo( this.user );
    } */

  ionViewWillEnter() {
    this.userSrv.getUserInfo().then( user => this.user = user );

  }
  async presentJournalEntryModal() {
    const journalModal = await this.modalCtrl.create( {
      component: JournalEntryPage
    } );
    journalModal.present();
    var { data } = await journalModal.onDidDismiss();
    if ( data )
      this.user.everyDayScore.push( data.score );
    this.userSrv.updateUserInfo( this.user );
    this.presentToast( data.score );
  }
  async presentToast( score ) {
    const toast = await this.toastController.create( {
      header: 'Score',
      message: 'Your score is: ' + score.score,
      position: 'middle',
      duration: 2000
    } );
    toast.present();
  }

  moodSetImg( mood) {
    var text: string;
    mood = parseInt( mood );
    switch ( mood ) {
      case 0:
        return  "assets/emojis/happy.png";
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
  //todo: menu to enter date and accordingly view the scores 
  @ViewChild( 'barChart' ) barChart;

  bars: any;
  colorArray: any;


  ionViewDidEnter() {
    this.createBarChart();
  }
  everydayScores() {
    var scores=[];
    for ( let i = 0; i < this.user.everyDayScore.length; i++ ) {
        scores.push( this.user.everyDayScore[ i ].score );
        console.log( scores );
    }
    return scores;
  }

  createBarChart() {
    this.bars = new Chart( this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [ 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8' ],
        datasets: [ {
          label: 'Viewers in millions',
          data:  this.everydayScores() ,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        } ]
      },
      options: {
        scales: {
          yAxes: [ {
            ticks: {
              beginAtZero: true
            }
          } ]
        }
      }
    } );
  }
}
