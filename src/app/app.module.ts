import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvOptimizerComponent } from './modules/cv-optimizer/cv-optimizer.component';
import { BasePageComponent } from './modules/shared/components/base-page/base-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransmitionDialogComponent } from './modules/shared/dialogs/transmition-dialog/transmition-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CvOptimizerComponent,
    BasePageComponent,
    TransmitionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
