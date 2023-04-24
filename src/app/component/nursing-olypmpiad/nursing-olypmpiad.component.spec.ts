import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NursingOlypmpiadComponent } from './nursing-olypmpiad.component';

describe('NursingOlypmpiadComponent', () => {
  let component: NursingOlypmpiadComponent;
  let fixture: ComponentFixture<NursingOlypmpiadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NursingOlypmpiadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NursingOlypmpiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
