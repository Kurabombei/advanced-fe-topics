import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReduxStyleComponent} from "./redux-style.component";

const routes: Routes = [
  {path: '', component: ReduxStyleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxStyleRoutingModule { }
