import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationalWithBehaviorsComponent } from './presentational-with-behaviors.component';
import { nanoid } from 'nanoid';

describe('presentational component', () => {
  let component: PresentationalWithBehaviorsComponent;
  let fixture: ComponentFixture<PresentationalWithBehaviorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationalWithBehaviorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalWithBehaviorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {
      it('Then: should display the title', () => {
        const fixture = TestBed.createComponent(PresentationalWithBehaviorsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
      });
    });
  });
});
