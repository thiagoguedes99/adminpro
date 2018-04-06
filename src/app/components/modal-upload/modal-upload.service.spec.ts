import { TestBed, inject } from '@angular/core/testing';

import { ModalUploadService } from './modal-upload.service';

describe('ModalUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalUploadService]
    });
  });

  it('should be created', inject([ModalUploadService], (service: ModalUploadService) => {
    expect(service).toBeTruthy();
  }));
});
