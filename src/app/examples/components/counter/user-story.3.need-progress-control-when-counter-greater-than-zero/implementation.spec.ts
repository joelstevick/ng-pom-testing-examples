import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { mergeConfig, POM } from 'ng-pom-testing';
import { CounterComponent } from '../counter.component';
import { counterPomConfig } from '../counter.angular-testbed.pom';
import { commonTestbedConfig } from 'src/app/testing/common/testbed.config';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let nativeElement: HTMLElement;
  let pom: POM;

  beforeEach(async () => {
    // basic Angular Testbed setup
    await TestBed.configureTestingModule(
      //
      // commonTestbedConfig contains all of the declarations, providers and imports 
      // that will be commonly required.
      //
      // for example MatProgressBarModule
      //
      mergeConfig(commonTestbedConfig, {
        declarations: [CounterComponent],
      })
    ).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    pom = new POM({ fixture, component, nativeElement }, counterPomConfig);

    fixture.detectChanges();
  });

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
        beforeEach(() => {
          // arrange
          counterBefore = fixture.componentInstance.counter;

          // act
          pom.action('click-increment-btn');
        });
        it('Then: the progress control should be displayed', () => {
          // assert
          expect(pom.action('get-progress-control')).toBeTruthy();
        });
        it('Then: counter should have been incremented', () => {
          // assert
          expect(fixture.componentInstance.counter).toEqual(counterBefore + 1);
        });
      });
    });
  });
});
