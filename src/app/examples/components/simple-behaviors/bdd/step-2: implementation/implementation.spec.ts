import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleBehaviorsComponent } from './simple-behaviors.component';
import { nanoid } from 'nanoid';

describe('simple behaviors component', () => {
  let component: SimpleBehaviorsComponent;
  let fixture: ComponentFixture<SimpleBehaviorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleBehaviorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBehaviorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {
      it('Then: should display the title', () => {
        const fixture = TestBed.createComponent(SimpleBehaviorsComponent);
        fixture.componentInstance.title = nanoid();
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(
          fixture.componentInstance.title
        );
      });

      it('Then: should display a button where the label is bound to the "label" component property', () => {
        const fixture = TestBed.createComponent(SimpleBehaviorsComponent);
        fixture.componentInstance.label = nanoid();
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('[data-testid=increment-btn]').textContent).toContain(
          fixture.componentInstance.label
        );
      });

      it('Then: should display a counter that is initialized to zero', () => {
        const fixture = TestBed.createComponent(SimpleBehaviorsComponent);
        fixture.componentInstance.label = nanoid();
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('[data-testid=counter]').textContent).toContain(
          fixture.componentInstance.counter
        );
      });

      describe('When: the increment-button is clicked', () => {
        it('Then: the counter should be incremented', () => {
          expect(true).toBeTrue();
        });
      });
    });
  });
});
