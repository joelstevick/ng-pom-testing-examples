import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresentationalComponent } from './examples/components/presentational/bdd/step-2: implementation/presentational.component';
import { SimpleBehaviorsComponent } from './examples/components/simple-behaviors/bdd/step-2: implementation/simple-behaviors.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationalComponent,
    SimpleBehaviorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
