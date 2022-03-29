import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'question1', component: LinkComponent },
  { path: 'question2', component: BoxesComponent },
  { path: 'question3', component: ReducerComponent },
  { path: 'question4', component: UsersComponent },
  { path: '', redirectTo: 'question1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
