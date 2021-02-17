import { TestBed } from '@angular/core/testing';

import { SoundService } from './sound.service';

describe('SoundService', () => {
  let service: SoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play "button sound"', () => {
    expect(service.btnSound()).toBeUndefined();
  });

  it('should play "display sound"', () => {
    expect(service.displaySound()).toBeUndefined();
  });
});
