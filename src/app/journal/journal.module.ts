import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalPage } from './journal.page';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';
import { JournalPageRoutingModule } from './journal-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    JournalPageRoutingModule,
    CalendarModule
  ],
  
  declarations: [JournalPage]
})
export class JournalPageModule {}
