import { TestBed, inject } from '@angular/core/testing';

import { UploadImagemService } from './upload-imagem.service';

describe('UploadImagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImagemService]
    });
  });

  it('should be created', inject([UploadImagemService], (service: UploadImagemService) => {
    expect(service).toBeTruthy();
  }));
});
