import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'product',component:ProductsComponent},
    {path:'product/:id',component:ViewProductComponent}
];
