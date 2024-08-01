import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop14Component } from './workshop14.component';

describe('Workshop14Component', () => {
  let component: Workshop14Component;
  let fixture: ComponentFixture<Workshop14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
