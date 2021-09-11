import { ComponentFixture } from '@angular/core/testing';
import { PomConfig } from 'ng-pom-testing';
import { CounterComponent } from '../../counter.component';

interface Context {
  fixture: ComponentFixture<CounterComponent>;
  component: CounterComponent;
}

export const counterPomConfig: PomConfig = {
  actions: {
    'set-title': {
      action: ({ fixture, component }, title: string) => {
        component.title = title;
        fixture.detectChanges();
      },
    },

    'set-label': {
        action: ({ fixture, component }, label: string) => {
          component.label = label;
          fixture.detectChanges();
        },
      },
  },
};
