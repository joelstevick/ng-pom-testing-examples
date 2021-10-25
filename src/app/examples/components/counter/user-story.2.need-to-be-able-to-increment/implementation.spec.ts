import {
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { nanoid } from 'nanoid';
import { POM } from 'ng-pom-testing';
import { CounterComponent } from '../counter.component';
import { counterPomConfig } from '../counter.angular-testbed.pom';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let nativeElement: HTMLElement;
  let pom: POM;

  beforeEach(async () => {
    // basic Angular Testbed setup
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [MatProgressBarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    pom = new POM({ fixture, component, nativeElement }, counterPomConfig);

    fixture.detectChanges();
  });


  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {

      it('Then: should display a button where the label is bound to the "label" component property', () => {
       // arrange
       const label = nanoid();

       // act
       pom.action('set-label', label);

       // assert
       expect(pom.action('get-increment-btn').textContent).toContain(label);
      });

      it('Then: should display a counter that is initialized to zero', () => {
      
        // arrange -- defaults to 0

        // act -- testing initial state

        // assert
        expect(
          pom.action('get-counter').textContent
        ).toContain(fixture.componentInstance.counter);
      });

      describe('When: the increment-button is clicked', () => {
        it('Then: the counter should be incremented', fakeAsync(() => {
          // arrange 
          const counter = pom.action('get-counter');
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
