import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ItemComponent } from './item/item.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    ItemComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { 
  constructor(){
    console.log('Product module loaded')
  }
}
