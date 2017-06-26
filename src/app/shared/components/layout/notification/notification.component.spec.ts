import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent:', () => {

  let comp:    NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let de:      DebugElement;
  let num:      DebugElement;
  let el:      HTMLElement;
  let dropdown:      DebugElement[];
  let items:      DebugElement[];

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    comp    = fixture.componentInstance;

    comp.notificationList = [
      {
        name: "test",
        number: 100
      },
      {
        name: "value",
        number: 1
      }
    ];

    de = fixture.debugElement;

    num = de.query(By.css('.notification-number'));
    el = num.nativeElement;

    dropdown = de.queryAll(By.css('.notification-dropdown-item'));
    // items = dropdown.children;
    
    fixture.detectChanges();
  });

  it('should display original number of notification', () => {
    expect(el.textContent).toContain(comp.notificationNumber);
  });

  it('new number of notification', () => {
    comp.notificationList = [
      {
        name: "1",
        number: 10
      }
    ];

    fixture.detectChanges();

    expect(el.textContent).toContain(10);
  });

  it('number of items', () => {
    // expect().toBe(comp.notificationList.length);
  });
});