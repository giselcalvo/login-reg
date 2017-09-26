import { TestBed, inject } from '@angular/core/testing';

import { LoginRegService } from './login-reg.service';

describe('LoginRegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRegService]
    });
  });

  it('should be created', inject([LoginRegService], (service: LoginRegService) => {
    expect(service).toBeTruthy();
  }));
});
