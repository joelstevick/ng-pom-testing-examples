import { ComponentFixture } from '@angular/core/testing';
import { PomConfig } from 'ng-pom-testing';
import { CounterComponent } from './counter.component';

interface Context {
  fixture: ComponentFixture<CounterComponent>;
  component: CounterComponent;
  nativeElement: HTMLElement;
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
      action: ({ fixture, nativeElement }) => {
        const incrementBtn = nativeElement.querySelector(
          '[data-testid=increment-btn]'
        );

        incrementBtn.click();
        fixture.detectChanges();
      },
    },
    'get-increment-btn': {
      action: ({ nativeElement }) => {
        return nativeElement.querySelector('[data-testid=increment-btn]');
      },
    },
    'get-progress-control': {
      action: ({ nativeElement }) => {
        return nativeElement.querySelector('[data-testid=progress-control]');
      },
    },
    'get-counter': {
      action: ({ nativeElement }) => {
        return nativeElement.querySelector('[data-testid=counter]');
      },
    },
    'get-title': {
      action: ({ nativeElement }) => {
        return nativeElement.querySelector('[data-testid=title]');
      },
    },
  },
};
