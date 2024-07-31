import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getUsersCountResolver } from './get-users-count.resolver';

describe('getUsersCountResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getUsersCountResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
