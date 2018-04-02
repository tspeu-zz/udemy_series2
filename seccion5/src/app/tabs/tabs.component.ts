import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {name: 'Luke TrotaCielos', side: ''},
    {name : 'Dart Vader', side: ''}
  ];
  chosenListSide = 'all';

  constructor() { }

  ngOnInit() {}

  // filtrar la lista de personajes si es Light/Dark
  getCharacters() {
    if ( this.chosenListSide === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenListSide;
    });
  }

  onChoose(side) {
    this.chosenListSide = side;
    console.log(' this.chosenListSide tabs',  this.chosenListSide);
  }

  //
  onSideChosen(info) {
    const pos = this.characters.findIndex((char) => {
    return char.name === info.name;
    });
    this.characters[pos].side = info.side;
    console.log('this.characters->', this.characters);
  }
}
