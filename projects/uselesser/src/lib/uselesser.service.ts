import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UselesserService {

  constructor() { }

  greeter(name: string){
    return `Hello from ${name}`;
  }
}
