import { ComponentFixture, tick } from '@angular/core/testing';
import { PomConfig } from 'ng-pom-testing';
import { CounterComponent } from '../../counter.component';

interface Context {
  fixture: ComponentFixture<CounterComponent>;
  component: CounterComponent;
  compiled: any
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
    'click-increment-btn': {
      action: ({ fixture, compiled }, label: string) => {
        const incrementBtn = compiled.querySelector(
            '[data-testid=increment-btn]'
          );
          
          incrementBtn.click();
          tick();
          fixture.detectChanges();
      },
    },
  },
};
