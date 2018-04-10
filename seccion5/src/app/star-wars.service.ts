import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import {  Http, ResponseOptions} from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {

    private characters = [
        {name: 'Luke TrotaCielos', side: ''},
        {name : 'Dart Vader', side: ''}
    ];
    private logService: LogService;

    // usar Subjent en vez de EventEmitter
    charactersChanged = new Subject<void>();
    http: Http;
    url = 'https://swapi.co/api/';
    datos =  [];
    // fro, Http
    res: Response;
    constructor(log: LogService, http: Http) {
        this.logService = log;
        this.http = http;
    }

    // from htttp .map()
    fetchCharacters() {
      this.http.get(this.url + 'people/')
      .map( (res  ) => {
        const allDatos = res.json();
        // this.datos = res.json();
        const personajesExtract = allDatos.results;
        const personajesNow = personajesExtract.map( (per) => {
          return {name: per.name, side: ''};
        });
        return personajesNow;
        // return res.json();
      })
      .subscribe( (data) => {
        // this.datos = data.results;
        // console.log('service this.datos', this.datos);
        // console.log('JSON response', JSON.stringify(response));
        this.characters = data;
        console.log('response  this.characters',  this.characters);
        });

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
