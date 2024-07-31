import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop09Component } from './workshop09.component';

describe('Workshop09Component', () => {
  let component: Workshop09Component;
  let fixture: ComponentFixture<Workshop09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
