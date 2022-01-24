import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material/material';
import { ContentComponent } from './content.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContentRoutingModule } from './content-routing.module';



@NgModule({
  declarations: [
    ContentComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContentRoutingModule
  ],
})
export class ContentModule { }
