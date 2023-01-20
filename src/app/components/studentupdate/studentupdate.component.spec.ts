import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupdateComponent } from './studentupdate.component';
import { FormBuilder } from '@angular/forms';

describe('StudentupdateComponent', () => {
  let component: StudentupdateComponent;
  let fixture: ComponentFixture<StudentupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ StudentupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
