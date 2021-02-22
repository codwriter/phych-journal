import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component( {
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: [ './journal-entry.page.scss' ],
} )
export class JournalEntryPage implements OnInit {
  @ViewChild( 'divQuestionOne' ) questionOneDiv: any;
  constructor( private modalCtrl: ModalController, ) { }
  expandedQ1: boolean = false;
  expandedQ2: boolean = false;
  toggleQ1: string = "ion-hide";
  toggleQ2: string = "ion-hide";
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  toggleViewQ1() {
    if ( this.expandedQ1 == false ) {
      this.toggleQ1 = "";
      this.expandedQ1 = !this.expandedQ1;
    }
    else {
      this.toggleQ1 = "ion-hide"
      this.expandedQ1 = !this.expandedQ1;
    }
  }
  toggleViewQ2() {
    if ( this.expandedQ2 == false ) {
      this.toggleQ2 = "";
      this.expandedQ2 = !this.expandedQ2;
    }
    else {
      this.toggleQ2 = "ion-hide"
      this.expandedQ2 = !this.expandedQ2;
    }
  }

}
