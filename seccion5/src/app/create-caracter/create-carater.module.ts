import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateCaracterComponent } from './create-caracter.component';

@NgModule({
    declarations : [
        CreateCaracterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: CreateCaracterComponent }
        ])
    ]
})


export class CreateCaracterModule {}
