import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingDetailComponent } from './mailing-detail.component';

describe('MailingDetailComponent', () => {
  let component: MailingDetailComponent;
  let fixture: ComponentFixture<MailingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
