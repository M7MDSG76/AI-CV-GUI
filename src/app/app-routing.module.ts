import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvOptimizerComponent } from './modules/cv-optimizer/cv-optimizer.component';

const routes: Routes = [
  {path:'', redirectTo:'cv-optimizer', pathMatch: "full"},
  {path:'cv-optimizer', component:CvOptimizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
