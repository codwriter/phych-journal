import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalPage } from './journal.page';
import { JournalPageRoutingModule } from './journal-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    JournalPageRoutingModule,
  ],
  
  declarations: [JournalPage]
})
export class JournalPageModule {}
