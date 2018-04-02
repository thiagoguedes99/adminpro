import { TestBed, inject } from '@angular/core/testing';

import { SubirService } from './subir.service';

describe('SubirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubirService]
    });
  });

  it('should be created', inject([SubirService], (service: SubirService) => {
    expect(service).toBeTruthy();
  }));
});
