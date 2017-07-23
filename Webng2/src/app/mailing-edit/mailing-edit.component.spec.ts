import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingEditComponent } from './mailing-edit.component';

describe('MailingEditComponent', () => {
  let component: MailingEditComponent;
  let fixture: ComponentFixture<MailingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
