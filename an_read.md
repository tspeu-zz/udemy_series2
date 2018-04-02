#Inputs-->
si hay un property para pasa en una propiedad para Input
import { Input } from '@angular/core';
@Input()  name ="algo";

ahora se cconvierte en una propiedad de entrada en el propio componente a nivel global
<user-componente-app  [name]="algo "><user-componente-app>
//
add bootsrat-->
npm i --save bootstrap
it a .angula-cli.json-> y add  
# la ruta relativa al src folder
      "styles": [
#        "../node_modules/bootstrao/dist/css/bootstrap.min.css",
        "styles.css"
      ],



ng g c tabs --spec false
# --specs false  para evitar crear los fichero maps. para los test en desarrollo  

 