import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// npm i ngx-toastr
import { ToastrModule } from 'ngx-toastr';
// Default
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Common
import { BackGroundComponent } from './common/layouts/back-ground.component';
// Modules with components
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent, BackGroundComponent],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
