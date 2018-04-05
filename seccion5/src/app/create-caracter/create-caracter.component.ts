import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
// import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-caracter',
  templateUrl: './create-caracter.component.html',
  styleUrls: ['./create-caracter.component.css']
})
export class CreateCaracterComponent implements OnInit {

  sides = [
    {display: 'None',   value: ''},
    {display: 'Light',  value: 'light'},
    {display: 'Dark',   value: 'dark'}
  ];
  swService: StarWarsService;

  constructor(swSer: StarWarsService) {
    this.swService = swSer;
   }

  ngOnInit() {
  }

  onSubmit(formulario) {
    if (formulario.invalid) {
      return;
    }
    console.log('submit formulario', formulario.value);
    this.swService.addPersonaje(formulario.value.name, formulario.value.side );
  }
}
