import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page'

@Component( {
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: [ 'journal.page.scss' ]
} )
export class JournalPage {

  constructor( private modalCtrl: ModalController ) { }

  async presentJournEntryModal() {
    const modal = await this.modalCtrl.create( {
      component: JournalEntryPage,
    } );
    return await modal.present();
  }

  onChange( $event ) {
    console.log( $event );
  }

}
