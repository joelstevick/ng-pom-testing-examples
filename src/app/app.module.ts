import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresentationalComponent } from './examples/components/presentational/presentational.component';
import { PresentationalWithBehaviorsComponent } from './examples/components/simple-behaviors/presentational-with-behaviors.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationalComponent,
    PresentationalWithBehaviorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
