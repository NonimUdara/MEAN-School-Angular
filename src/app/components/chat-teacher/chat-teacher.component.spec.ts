import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTeacherComponent } from './chat-teacher.component';

describe('ChatTeacherComponent', () => {
  let component: ChatTeacherComponent;
  let fixture: ComponentFixture<ChatTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
