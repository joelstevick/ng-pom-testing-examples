import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationalComponent } from '../presentational.component';
import { nanoid } from 'nanoid';

describe('presentational component', () => {
  let component: PresentationalComponent;
  let fixture: ComponentFixture<PresentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Given: initialization completed', () => {
    describe('When: rendered', () => {
      it('Then: should display the title', () => {
        const fixture = TestBed.createComponent(PresentationalComponent);
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
