import { Component } from '@angular/core';
import { UselesserService } from './uselesser.service';

@Component({
  selector: 'lib-uselesser',
  template: `<section>
    <h1>uselesser component</h1>
    <button (click)="greet()">Greet</button>
    <p>{{ greeting }}</p>
  </section>`,
  styles: [],
})
export class UselesserComponent {
  public greeting?: string;
  constructor(private uselessService: UselesserService) {}

  greet() {
    this.greeting = this.uselessService.greeter('Pero');
  }
}
