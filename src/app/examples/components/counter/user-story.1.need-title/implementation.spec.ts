import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nanoid } from 'nanoid';
import { POM } from 'ng-pom-testing';
import { counterPomConfig } from '../counter.angular-testbed.pom';
import { CounterComponent } from '../counter.component';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let nativeElement: HTMLElement;
  let pom: POM;

  beforeEach(async () => {
    
    // basic Angular Testbed setup
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    // allocate a pom instance that is specific to this component
    pom = new POM({ fixture, component, nativeElement }, counterPomConfig);

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
        expect(pom.action('get-title').textContent).toContain(title);
      });
    });
  });
});
