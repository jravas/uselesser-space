import { TestBed } from '@angular/core/testing';

import { UselesserComponent } from './uselesser.component';
import { UselesserService } from './uselesser.service';

describe('UselesserComponent', () => {
  let component: UselesserComponent;
  let uselesserService: UselesserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UselesserComponent],
      providers: [
        UselesserComponent,
        {
          useClass: UselesserComponent,
        },
      ],
    });

    component = TestBed.inject(UselesserComponent);
    uselesserService = TestBed.inject(UselesserService);
  });

  it('#greet() should set #greeting to "Hello from Bob"', () => {
    expect(component.greeting)
      .withContext('undefined at first')
      .toBe(undefined);
    component.greet();
    expect(component.greeting)
      .withContext('Hello from Bob after click')
      .toMatch(/Hello from Bob/i);
  });
});
