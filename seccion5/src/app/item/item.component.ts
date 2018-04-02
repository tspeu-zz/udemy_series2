import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  // @Output() sideSelected = new EventEmitter<{name: string, side: string}>();

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSelectSide(lado) {
    // this.character.side = side;
  //  this.sideSelected.emit({name: this.character.name, side: lado});
    this.swService.onSideChosen({name : this.character.name, side: lado});
     // console.log('ITEM emit the side :', this.sideSelected);
    console.log('ITEM por servicio-> :', this.swService);
  }

}
