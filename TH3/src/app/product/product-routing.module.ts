import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProcuctCreateComponent} from "./procuct-create/procuct-create.component";
import {ProcuctListComponent} from "./procuct-list/procuct-list.component";

const routes: Routes = [{
  path: 'create',
  component: ProcuctCreateComponent
},{
  path: '',
  component: ProcuctListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
