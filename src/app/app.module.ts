import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { Page404Component } from './components/page404/page404.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    BoxesComponent,
    Page404Component,
    ReducerComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
