import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OddsRoutingModule } from './odds-routing.module';
import { CalculateComponent } from './calculate/calculate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculateComponent
  ],
  imports: [
    CommonModule,
    OddsRoutingModule,
    ReactiveFormsModule
  ]
})
export class OddsModule { }
