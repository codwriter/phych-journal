import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalEntryPage } from './journal-entry.page';

describe('JournalEntryPage', () => {
  let component: JournalEntryPage;
  let fixture: ComponentFixture<JournalEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
