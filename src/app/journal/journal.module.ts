import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule,} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JournalPage } from './journal.page';
import { JournalPageRoutingModule } from './journal-routing.module';
import { surveyQuestions } from '../shared/shortQuestions';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JournalPageRoutingModule,
  ],
  providers: [ surveyQuestions ],
  declarations: [JournalPage]
})
export class JournalPageModule {}
