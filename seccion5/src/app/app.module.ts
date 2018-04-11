import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

// routes module
import { AppRoutingModule } from './app-routing.module';
// service
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CreateCaracterComponent } from './create-caracter/create-caracter.component';
import { HeaderComponent } from './header/header.component';
// module
import { CreateCaracterModule } from './create-caracter/create-carater.module';
import { ItemselectDirective } from './directivas/itemselect.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    ItemselectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CreateCaracterModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
