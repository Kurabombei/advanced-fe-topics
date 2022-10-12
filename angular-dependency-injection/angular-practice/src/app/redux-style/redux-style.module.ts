import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxStyleRoutingModule } from './redux-style-routing.module';
import { ReduxStyleComponent } from './redux-style.component';
import { ClockComponent } from './clock/clock.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ReduxStyleComponent,
    ClockComponent
  ],
	imports: [
		CommonModule,
		ReduxStyleRoutingModule,
		SharedModule
	]
})
export class ReduxStyleModule { }
