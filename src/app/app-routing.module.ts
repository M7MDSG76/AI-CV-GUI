import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter} from '@angular/router';
import { CvOptimizerComponent } from './modules/cv-optimizer/cv-optimizer.component';
import { TransmitionDialogComponent } from './modules/shared/dialogs/transmition-dialog/transmition-dialog.component';

const routes: Routes = [
  {path:'', redirectTo:'cv-optimizer', pathMatch: "full"},
  {path:'cv-optimizer', component:CvOptimizerComponent},
  {path:'t-dialog', component:TransmitionDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withViewTransitions())
  ]
})
export class AppRoutingModule {


 }
