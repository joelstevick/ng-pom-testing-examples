import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalWithBehaviorsComponent } from './presentational-with-behaviors.component';

describe('PresentationalWithBehaviorsComponent', () => {
  let component: PresentationalWithBehaviorsComponent;
  let fixture: ComponentFixture<PresentationalWithBehaviorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationalWithBehaviorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalWithBehaviorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
