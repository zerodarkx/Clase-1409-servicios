import { TestBed } from '@angular/core/testing';

import { PrimerServicioService } from './primer-servicio.service';

describe('PrimerServicioService', () => {
  let service: PrimerServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
