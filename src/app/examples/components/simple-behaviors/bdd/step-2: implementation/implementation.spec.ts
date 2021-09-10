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
    });
  });
});
