import { CurrencyPipe } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, inject, LOCALE_ID, signal } from '@angular/core';

@Component({
  selector: 'pr-root',
  imports: [CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ponyracer');
  protected readonly locale = inject(LOCALE_ID)
  protected readonly currency = inject(DEFAULT_CURRENCY_CODE)

}
