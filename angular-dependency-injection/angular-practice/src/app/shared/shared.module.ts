import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';
import { SpinnerModule } from './spinner/spinner.module';
import { EyeCatcherComponent } from './eye-catcher/eye-catcher.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { ContentQuoteComponent } from './content-quote/content-quote.component';
import { MainContainerComponent } from './main-container/main-container.component';

const components = [
  ShellComponent,
  EyeCatcherComponent,
  ContentImageComponent,
  ContentQuoteComponent,
  MainContainerComponent
];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
  SpinnerModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
