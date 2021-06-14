import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { JournalEntryPageRoutingModule } from './journal-entry-routing.module';

import { JournalEntryPage } from './journal-entry.page';
import { surveyQuestions } from '../shared/shortQuestions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JournalEntryPageRoutingModule
  ],
  providers:[surveyQuestions],
  declarations: [JournalEntryPage]
})
export class JournalEntryPageModule {}
