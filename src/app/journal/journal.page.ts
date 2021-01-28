import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage} from '../journal-entry/journal-entry.page'
@Component({
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: ['journal.page.scss']
})
export class JournalPage {
date: string;
  type: 'string';
  constructor() { }
  
  onChange($event) {
    console.log($event);
  }

}
