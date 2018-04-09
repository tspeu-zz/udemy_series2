import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // @Input() personajes ;
  // @Output() sideElejido = new EventEmitter<{name: string, side: string}>();
    personajes = [];
  // para pasa el parametro del rourter/
    activatedRoute: ActivatedRoute;
    swService: StarWarsService;
    guardarSide = 'all';

  constructor(activatedRoute: ActivatedRoute,  swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.personajes = this.swService.getCharacters(params.side);
          this.guardarSide = params.side;
      }, (error) => {
        console.log('ERRR', error);
      });

      this.swService.charactersChanged.subscribe(
        () => {
          this.personajes = this.swService.getCharacters(this.guardarSide);

        }
      );


  }

  // onSelectedSide(charInfo) {
  //   this.sideElejido.emit(charInfo);
  // }

}
