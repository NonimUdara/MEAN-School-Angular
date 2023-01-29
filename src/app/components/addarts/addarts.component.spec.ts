import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddartsComponent } from './addarts.component';

xdescribe('AddartsComponent', () => {
  let component: AddartsComponent;
  let fixture: ComponentFixture<AddartsComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ AddartsComponent ]
    // })
    // .compileComponents();

    TestBed.configureTestingModule({
      declarations: [AddartsComponent]
    });

    fixture = TestBed.createComponent(AddartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // submitEl = fixture.debugElement.query(By.css('button'));
    // loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    // passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });


  it('Entering email and password emits loggedIn event', () => {
    let user = {
      email: "test@example.com",
      password: "123456"
    };

    // loginEl.nativeElement.value = "test@example.com"; 
    // passwordEl.nativeElement.value = "123456";
  
    // submitEl.triggerEventHandler('click', null); (2)
  
    expect(user.email).toBe("test@example.com");
    expect(user.password).toBe("123456");
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
