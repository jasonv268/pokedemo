import { Component, Input } from '@angular/core';
import { PokeDetails } from '../pokemon';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css'
})
export class PokeDetailsComponent {


  @Input('pokeDetails')
  pokeDetails: PokeDetails = {} as PokeDetails;;

}
