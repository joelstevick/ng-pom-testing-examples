import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { nanoid } from 'nanoid';
import { POM } from 'ng-pom-testing';
import { CounterComponent } from '../../counter.component';
import { counterPomConfig } from './counter.angular-testbed.pom';

describe('simple behaviors component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: any;
  let pom: POM;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    pom = new POM({ fixture, component, compiled }, counterPomConfig);

    fixture.detectChanges();
  });

  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {
      it('Then: should display the title', () => {
        // arrange
        const title = nanoid();

        // act
        pom.action('set-title', title);

        // assert
        expect(compiled.querySelector('h1').textContent).toContain(title);
      });

      it('Then: should display a button where the label is bound to the "label" component property', () => {
       // arrange
       const label = nanoid();

       // act
       pom.action('set-label', label);

       // assert
       expect(compiled.querySelector('[data-testid=increment-btn]').textContent).toContain(label);
      });

      it('Then: should display a counter that is initialized to zero', () => {
      
        // arrange -- defaults to 0

        // act -- testing initial state

        // assert
        expect(
          compiled.querySelector('[data-testid=counter]').textContent
        ).toContain(fixture.componentInstance.counter);
      });

      describe('When: the increment-button is clicked', () => {
        it('Then: the counter should be incremented', fakeAsync(() => {
          // arrange 
          const counter = compiled.querySelector('[data-testid=counter]');
          const counterBefore = fixture.componentInstance.counter;

          // act
          pom.action('click-increment-btn');

          // assert
          expect(counter.textContent).toContain(counterBefore + 1);
        }));
      });
    });
  });
});
