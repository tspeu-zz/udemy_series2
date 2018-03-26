#Inputs-->
si hay un property para pasa en una propiedad para Input
import { Input } from '@angular/core';
@Input()  name ="algo";

ahora se cconvierte en una propiedad de entrada en el propio componente a nivel global
<user-componente-app  [name]="algo "><user-componente-app>
//
