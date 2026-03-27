import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Race } from './component/race/race';
import { formatNumber, JsonPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface PonyModel{
  id: number;
  name: string;
  color?: string;
}
interface RaceModel{
  name: string;
  age?: number;
}

@Component({
  selector: 'ns-root',
  imports: [RouterOutlet, Race, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ponyrace');
  protected readonly user = signal({ name: 'monami', lastname: 'jerome', age: 23 });
constructor(){
  inject(Title).setTitle('PonyRacer - Bet on ponies ');
  inject(Meta).addTag({ name: 'monami', content: 'my code library'});

}
  protected readonly formattedSpeed = computed(()=>
    formatNumber(this.user().age, 'en-US', '.2')
  )
  protected readonly races = signal<RaceModel| undefined>(undefined);

  protected ponyModel = signal<PonyModel>({
  id: 2, name: 'Jean-Pierre', color: 'gray'
  })

  protected readonly dynamicStyle = signal(
    'background-color: green; padding: 10px; border-radius:10px; width: fit-content; margin:center'
  );

  protected refresh(): void{
    this.races.set({name: 'Lyon'})
  }
  protected betOnPony(event: PonyModel){
    console.log('event fired from child component')

  }

  count= signal(0)
  onSpacePress(){

    console.log(count);
  }
}

const count = signal(42);
const rainbowDash = signal<PonyModel>({
  id: 3,
  name : 'rainbowDash',
  color: 'blue'
})
const unknownPony = signal<PonyModel| undefined>(undefined)
let value: PonyModel = rainbowDash();
console.log(JSON.stringify(value));
rainbowDash.set({
  id: 4,
  name: 'Monami Jerome',
  color: 'white'
})
console.log(JSON.stringify(rainbowDash()));
rainbowDash.update(pony => ({ ...pony, color: 'red'}));
rainbowDash.set({ ...rainbowDash(), color: 'green'});
// value = rainbowDash();
console.log(JSON.stringify(value));
