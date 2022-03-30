import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { Page404Component } from './components/page404/page404.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    BoxesComponent,
    Page404Component,
    ReducerComponent,
    UsersComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
