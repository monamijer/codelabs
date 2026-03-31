import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ponyracer');
}
