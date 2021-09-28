import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{
  path: 'product',
  loadChildren: ()=> import('./product/product.module').then(module => module.ProductModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
