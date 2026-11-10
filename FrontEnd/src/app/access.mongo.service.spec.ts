import { TestBed } from '@angular/core/testing';

import { AccessMongoService } from './access.mongo.service';

describe('AccessMongoService', () => {
  let service: AccessMongoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessMongoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
