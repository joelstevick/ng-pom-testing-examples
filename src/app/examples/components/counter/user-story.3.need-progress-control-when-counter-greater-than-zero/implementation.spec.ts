import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { mergeConfig, POM } from 'ng-pom-testing';
import { CounterComponent } from '../counter.component';
import { counterPomConfig } from '../counter.angular-testbed.pom';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { commonTestbedConfig } from 'src/app/testing/common/testbed.config';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: any;
  let pom: POM;

  beforeEach(async () => {
    // basic Angular Testbed setup
    await TestBed.configureTestingModule(
      //
      // commonTestbedConfig contains all of the declarations, providers and imports that will be commonly required.
      // for example MatProgressBarModule
      //
      mergeConfig(commonTestbedConfig, {
        declarations: [CounterComponent],
      })
    ).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    pom = new POM({ fixture, component, compiled }, counterPomConfig);

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
