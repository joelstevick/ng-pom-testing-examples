import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { CounterComponent } from './examples/components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ParentComponent } from './examples/components/parent/parent.component';
import { ChildComponent } from './examples/components/parent/child/child.component';
import { GrandChildComponent } from './examples/components/parent/child/grand-child/grand-child.component';
import { MatSlideToggleComponent } from './examples/components/mat-slide-toggle/mat-slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectComponent } from './examples/components/mat-select/mat-select.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    MatSlideToggleComponent,
    MatSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
