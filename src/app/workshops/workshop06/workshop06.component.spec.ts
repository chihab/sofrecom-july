import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop06Component } from './workshop06.component';

describe('Workshop06Component', () => {
  let component: Workshop06Component;
  let fixture: ComponentFixture<Workshop06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshop06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshop06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
