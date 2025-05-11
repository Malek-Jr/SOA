import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { motoGuard } from './moto.guard';

describe('produitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => motoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
