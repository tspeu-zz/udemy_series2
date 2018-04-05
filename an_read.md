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

 ##validaciones al form se le aññade las clases por ngForm
 class="ng-untouched ng-pristine ng-invalid"
 every 
 input.ng-invalid{
    border: solid red;
} asi se le pasa porque la clase ya la cambia ngForm al pasar a valid
input.ng-invalid.ng-touched{--xsolo cuando se accede al ibnput-->

###error mess crear una variable del DOM con #
#nameCtrl="ngModel" y si se asigna a ngMOdel esa variable tiene acceso s todo el FormContrl object   y
se puede acceder al control  *ngIf="nameCtrl.invalid"

#disable boton #form la varible del DOM qque equivale al ngForm
[disabled]="form.invalid" o [disabled]="!form.valid"


########### --- OJO--- NGMODEL ##########
ngModel es realmente una directiva que permite a cceder a los FomrControlers, pero que opcionalmente 
se pude utilizar como [(ngModel)] 2 vaw Bindings-> y ademas como atributo [ngModel]. pero su uso es para
dar acceso a los objetos del FormControl-
##########_____*****************************   template--FORMS
#############################################################


###### ----------------REACTIVE FORMS
el form se crea en el ts.controller y se sincronoza con el template
da mas control sobre el form desde el propio Form.->
#########-----------#######################

# routes..
se import ael modulo 
import { RouterModule } from '@angular/router';
y se declara en los modulos impport
 imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutes)
  ],
  forChild es para lazy loads. 
  ##luego hay que indicarle a angular donde debe renderizar los componente de cada ruta por medio de ...
   <router-outlet></router-outlet>
   #--aqui se le dice donde renderiza los comps.

##IMPORTANTE cuando se pasa un atributo [routerLik]="''" se debe pasar aqui-->

 routerLinkActive="active" es una directicva que indica que classe CSS