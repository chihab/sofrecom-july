import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop08Component } from './workshop08.component';

describe('Workshop08Component', () => {
  let component: Workshop08Component;
  let fixture: ComponentFixture<Workshop08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
