import { Component, OnInit } from '@angular/core';
// import { StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // characters = [];
  // chosenListSide = 'all';

  // swService: StarWarsService;

  constructor() {
    // this.swService = swService;
   }

  ngOnInit() {}

  // getCharacters() {
  //   this.characters = this.swService.getCharacters(this.chosenListSide);
  //   return this.characters;
  // }

  // onChoose(side) {
  //   this.chosenListSide = side;
  //   console.log(' this.chosenListSide tabs',  this.chosenListSide);
  // }

  //

}
