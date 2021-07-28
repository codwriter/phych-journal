import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Score } from 'src/app/shared/score';

@Component( {
  selector: 'app-journal-entry-modal',
  templateUrl: './journal-entry-modal.component.html',
  styleUrls: [ './journal-entry-modal.component.scss' ],
} )
export class JournalEntryModalComponent implements OnInit {
  @Input() existedScore: Score;
  constructor( private modalCtrl: ModalController,
    private userSrvc: UserService,
    private alertctrl: AlertController ) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertctrl.create( {
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: 'Are you sure you want to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }, {
          text: 'Okay',
          handler: () => {
            this.delete();
          }
        }
      ]
    } );
    await alert.present();
  }

  delete() {
    this.userSrvc.deleteScore( this.existedScore );
    this.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
