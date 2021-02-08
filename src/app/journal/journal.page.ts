import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page'
import { CalendarComponentOptions } from 'ion2-calendar';


@Component( {
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: [ 'journal.page.scss' ]
} )
export class JournalPage {

  date: string;
  type: 'string';
  canBackwardsSelected: true;
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'range',
    from: new Date( Date.now() + 24 * 60 * 60 * 1000 * 2 ),
    to: new Date( Date.now() + 24 * 60 * 60 * 1000 * 90 )
  };
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
