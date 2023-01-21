import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiocrudComponent } from './biocrud.component';

describe('BiocrudComponent', () => {
  let component: BiocrudComponent;
  let fixture: ComponentFixture<BiocrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiocrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
