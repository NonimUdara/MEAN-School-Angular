import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAdminComponent } from './chat-admin.component';

describe('ChatAdminComponent', () => {
  let component: ChatAdminComponent;
  let fixture: ComponentFixture<ChatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
