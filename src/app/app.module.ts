import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterLayoutComponent,
    HeaderLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
