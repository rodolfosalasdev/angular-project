import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDefaultComponent } from './card-default.component';



@NgModule({
  declarations: [CardDefaultComponent],
  imports: [
    CommonModule
  ],
  exports: [CardDefaultComponent]
})
export class CardDefaultModule { }
