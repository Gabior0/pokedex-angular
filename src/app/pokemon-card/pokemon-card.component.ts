import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  pokemon!: String;

  @Input()
  identificationPokemon!: number;

  createImgPokemon() {
    // const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.identificationPokemon}.png`;
    const identifynumber = this.ledingZero(this.identificationPokemon);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${identifynumber}.png`;
  }

  ledingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = 0 + s;
    }
    return s;
  }
}
