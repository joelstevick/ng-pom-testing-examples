import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nanoid } from 'nanoid';
import { POM } from 'ng-pom-testing';
import { counterPomConfig } from '../counter.angular-testbed.pom';
import { CounterComponent } from '../counter.component';

describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: any;
  let pom: POM;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

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
        expect(pom.action('get-title').textContent).toContain(title);
      });
    });
  });
});
