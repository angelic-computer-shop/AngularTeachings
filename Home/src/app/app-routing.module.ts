import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomesComponent } from './homes/homes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';







const routes: Routes = [
  {path:'',redirectTo:'Homes',pathMatch:'full'}
,  
  {path:'cart',component:CartComponent},
  {path:'footer',component:FooterComponent},
  {path:'homes',component:HomesComponent},
  {path:'',component:NavBarComponent},
  {path:'products',component:ProductsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
