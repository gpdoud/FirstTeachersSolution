import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAddComponent } from './mailing-add.component';

describe('MailingAddComponent', () => {
  let component: MailingAddComponent;
  let fixture: ComponentFixture<MailingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
