import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})

export class MyComponentComponent {

  search: string = '';

  selectedPokemon: Pokemon | null = null;
  id: string = '';

  pokemons: Pokemon[] = [
    new Pokemon('1', 'Bulbasaur'),
    new Pokemon('2', 'Ivysaur'),
    new Pokemon('3', 'Venusaur'),
    new Pokemon('4', 'Charmander'),]

  handleClick(pokemon: Pokemon | null): void {

    console.log(pokemon?.name);
  }

}
