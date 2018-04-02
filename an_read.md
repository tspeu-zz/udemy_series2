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

#service
 @inject
 servicio solo pueden acceder a que se le inject servicios si estan impòrtados como providers en el 
 appModule..de hecho es la forma de que solo hay ana instancia del provider

 #form
 ####template form-->todo los campos y vñlaidaciones se hacen en el tempplate en el DOM->
 ngMOdel--> si se añade sin [(ngModel)]->sin 2 way Bindigs-> se le avisa a ngular que es un control
 a tomar en cuenta si se utiliza con ngSubmit->
 que permite usar propiedad bindidngs en vez de Event Bindigs->
 listen por el submit del form y nos da acceso a lo que pasa ahí..->
 <form (ngSubmit)="onSubmit()"> y el onSubmit(){}--> evita que la pagina se recarge y envia el for por
el metodo--*>
para acceder a los values hay que crear local referencian en el dom con el #form--son DOM elemntos 

# form="ngForm" se bind este elemneto en el template no el en ts.controller
# el objeto ngForm tiene todos los elemntos. del FORMControl y los inputs tambien al añadir el ngModel
entronces al para el  
onSubmit(formulario) {
    console.log('submit formulario', formulario.value);
  }
pasa por el ngModel y hace falte la propiedad name="" que es el valor que pasa en el objeto del 
form.value-> si no tiene porpiedad name="" da el fallo famoso.
 al add required>
 el formulario accede al formControl ngValid

 