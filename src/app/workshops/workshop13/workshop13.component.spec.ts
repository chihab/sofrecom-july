import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop13Component } from './workshop13.component';

describe('Workshop13Component', () => {
  let component: Workshop13Component;
  let fixture: ComponentFixture<Workshop13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
