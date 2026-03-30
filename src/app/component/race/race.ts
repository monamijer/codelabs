import { Component, input, OnInit, output, signal } from '@angular/core';
interface PonyModel {
  id: number;
  name: string;
  lastname?: string;
  age?: number;
}
@Component({
  selector: 'ns-race',
  imports: [],
  templateUrl: './race.html',
  styleUrl: './race.css',
})
export class Race {
  protected readonly ponies = signal<Array<PonyModel>>([
    { id: 1, name: 'Rainbaw Dash' },
    { id: 2, name: 'Pinkie Pie' },
  ]);

  protected refreshPonies(): void {
    this.ponies.set([
      { id: 3, name: 'Fluttershy' },
      { id: 4, name: 'Rarity' },
    ]);
  }
  readonly ponyModel = input.required<PonyModel>();
  readonly ponySelected = output<PonyModel>({ alias: 'activated' });
  protected selectMe() {
    this.ponySelected.emit(this.ponyModel());
  }
}
