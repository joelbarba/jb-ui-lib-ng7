import { TestBed } from '@angular/core/testing';

import { JbUiLibNg7Service } from './jb-ui-lib-ng7.service';

describe('JbUiLibNg7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JbUiLibNg7Service = TestBed.get(JbUiLibNg7Service);
    expect(service).toBeTruthy();
  });
});
