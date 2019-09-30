import { TestBed } from '@angular/core/testing';

import { RepoEmailSenderService } from './repo-email-sender.service';

describe('RepoEmailSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoEmailSenderService = TestBed.get(RepoEmailSenderService);
    expect(service).toBeTruthy();
  });
});
