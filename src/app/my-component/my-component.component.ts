import { Component } from '@angular/core';
import { IPokemon, PokeDetails, Pokemon, PokeServiceRes } from '../pokemon';
import { PokeApiService } from '../poke-api.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeApiService]
})

export class MyComponentComponent {

  search: string = '';

  selectedPokemon: Pokemon | null = null;
  id: string = '';

  pokemons: Pokemon[] = [];

  pokeDetails: PokeDetails = {} as PokeDetails;;


  constructor(private pokeService: PokeApiService) {


  }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe((data: PokeServiceRes) => {
      data.results.forEach((e: IPokemon, index: number) => this.pokemons.push(new Pokemon(index.toString(), e.name, e.url)));
    });

  }


  handleClick(pokemon: Pokemon | null): void {

    if (pokemon) {
      this.pokeService.getPokemonInfos(pokemon.name).subscribe((data: any) => {
        this.pokeDetails = data;
      });

    }


  }

}
