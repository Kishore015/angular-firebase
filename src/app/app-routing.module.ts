import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddTutorialComponent } from './tutorial/add-tutorial/add-tutorial.component';
import { TutorialListComponent } from './tutorial/tutorial-list/tutorial-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'add', component:AddTutorialComponent},
  {path:'tutorials-list', component:TutorialListComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
