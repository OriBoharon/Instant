/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemoteAlertsService } from './RemoteAlerts.service';

describe('Service: RemoteAlerts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteAlertsService]
    });
  });

  it('should ...', inject([RemoteAlertsService], (service: RemoteAlertsService) => {
    expect(service).toBeTruthy();
  }));
});
