import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Default
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Common
import { BackGroundComponent } from './common/back-ground/back-ground.component';

// Modules with components
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent, BackGroundComponent],
  imports: [BrowserModule, ViewsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
