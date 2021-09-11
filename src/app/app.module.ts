import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './examples/components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
