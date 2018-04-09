import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarWarsService {

    private characters = [
        {name: 'Luke TrotaCielos', side: ''},
        {name : 'Dart Vader', side: ''}
    ];
    private logService: LogService;

    // usar Subjent en vez de EventEmitter
    charactersChanged = new Subject<void>();

    constructor(log: LogService) {
        this.logService = log;
    }

// filtrar la lista de personajes si es Light/Dark
  getCharacters(chosenListSide) {
    if ( chosenListSide === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenListSide;
    });
  }

  onSideChosen(info) {
    const pos = this.characters.findIndex((char) => {
    return char.name === info.name;
    });
    this.characters[pos].side = info.side;
    this.charactersChanged.next();

    console.log('this.characters->', this.characters);
    this.logService.writeLog('cambio de LADO ' + info.name + ' lado: ' + info.side);
  }

  addPersonaje(nombre, lado) {
// valuida si es vacio
    const pos = this.characters.findIndex((per) => {
      return per.name === nombre;
    });

    if (pos !== -1) {
      return;
    }
    const newChar = {name: nombre, side: lado};
    this.characters.push(newChar);
  }

}
