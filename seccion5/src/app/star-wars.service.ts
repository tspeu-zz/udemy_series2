import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {

    private characters = [
        {name: 'Luke TrotaCielos', side: ''},
        {name : 'Dart Vader', side: ''}
    ];
    private logService: LogService;

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
    console.log('this.characters->', this.characters);
    this.logService.writeLog('cambio de LADO ' + info.name + ' lado: ' + info.side);
  }

}
