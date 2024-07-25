import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop05Component } from './workshop05.component';

describe('Workshop05Component', () => {
  let component: Workshop05Component;
  let fixture: ComponentFixture<Workshop05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
