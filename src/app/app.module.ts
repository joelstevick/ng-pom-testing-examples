import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './examples/components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ParentComponent } from './examples/components/parent/parent.component';
import { ChildComponent } from './examples/components/parent/child/child.component';
import { GrandChildComponent } from './examples/components/parent/child/grand-child/grand-child.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ParentComponent, ChildComponent, GrandChildComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
