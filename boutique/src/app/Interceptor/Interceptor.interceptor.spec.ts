import { TestBed } from '@angular/core/testing';

import { InterceptorInterceptor } from './Interceptor.interceptor';

describe('InterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorInterceptor = TestBed.inject(InterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
