import { Component, input, OnInit, output, signal } from '@angular/core';
interface PonyModel{
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
export class Race implements OnInit {
  protected readonly ponies = signal<Array<PonyModel>>([
    { id: 1, name: 'Rainbaw Dash'},
    { id: 2, name: 'Pinkie Pie'}
  ]);

  protected refreshPonies(): void{
    this.ponies.set([
      { id: 3, name: 'Fluttershy'},
      { id: 4, name: 'Rarity'}
    ]);
  }
  readonly ponyModel = input.required<PonyModel>();
  readonly ponySelected = output<PonyModel>({ alias: 'activated'});
  ngOnInit(){
    const body = document.querySelector('body');
    const ul = document.createElement('ul');
    body?.appendChild(ul);
    for(let i=0; i< 10; i++){
      const li = document.createElement('li');
      li.textContent = `always am i a yahoo boy ? ${i+1}`;
      if(i % 2 === 0){ li.style.background = 'gray'}
      ul.appendChild(li);
    }
  }
  protected selectMe(){
    this.ponySelected.emit(this.ponyModel())
  }
}
