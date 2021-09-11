import {
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { POM } from 'ng-pom-testing';
import { CounterComponent } from '../../counter.component';
import { counterPomConfig } from '../../counter.angular-testbed.pom';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: any;
  let pom: POM;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [MatProgressBarModule],
    }).compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    pom = new POM({ fixture, component, compiled }, counterPomConfig);

    fixture.detectChanges();
  }));

  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {
      it('Then: should not display the progress control', () => {
        // arrange -- should default to not displayed

        // act -- testing initial state

        // assert
        expect(pom.action('get-progress-control')).toBeFalsy();
      });

      describe('When: the increment-button has been clicked', () => {
        let counterBefore: number;
        beforeEach(fakeAsync(() => {
          // arrange
          counterBefore = fixture.componentInstance.counter;

          // act
          pom.action('click-increment-btn');
        }));
        it('Then: the progress control should be displayed', fakeAsync(() => {
          // assert
          expect(pom.action('get-progress-control')).toBeTruthy();
        }));
      });
    });
  });
});
