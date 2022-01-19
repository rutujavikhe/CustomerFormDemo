import { TestBed } from '@angular/core/testing';

import { AddUserToDbService } from './add-user-to-db.service';

describe('AddUserToDbService', () => {
  let service: AddUserToDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserToDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
