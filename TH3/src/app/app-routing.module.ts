import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcuctListComponent} from "./product/procuct-list/procuct-list.component";
import {ProcuctCreateComponent} from "./product/procuct-create/procuct-create.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProcuctListComponent
}, {
  path: 'product/create',
  component: ProcuctCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
