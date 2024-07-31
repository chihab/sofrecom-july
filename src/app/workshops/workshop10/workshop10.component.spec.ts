import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop10Component } from './workshop10.component';

describe('Workshop10Component', () => {
  let component: Workshop10Component;
  let fixture: ComponentFixture<Workshop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
