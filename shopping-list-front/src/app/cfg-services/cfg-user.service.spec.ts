import { TestBed } from '@angular/core/testing';

import { CfgUserService } from './cfg-user.service';

describe('CfgUserService', () => {
  let service: CfgUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfgUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
