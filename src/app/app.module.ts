import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Default
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Common
import { BackGroundComponent } from './common/layouts/back-ground.component';

// Modules with components
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent, BackGroundComponent],
  imports: [BrowserModule, ViewsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
