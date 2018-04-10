import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
// import { CreateCaracterComponent } from './create-caracter/create-caracter.component';
import { CreateCaracterModule } from './create-caracter/create-carater.module';


const rutes = [
    {path: 'characters', component: TabsComponent, children: [
        {path: '', redirectTo: 'all', pathMatch: 'full'},
        {path: ':side', component: ListComponent}
    ]},
    {path: 'new-character', loadChildren: './create-caracter/create-carater.module#CreateCaracterModule'},
    {path: '**', redirectTo: '/characters'}
    ];

@NgModule({
    imports : [
        RouterModule.forRoot(rutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}
