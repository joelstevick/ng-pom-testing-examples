import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { MatSlideToggleComponent } from './mat-slide-toggle.component';

fdescribe('MatSlideToggleComponent.', () => {
  let component: MatSlideToggleComponent;
  let fixture: ComponentFixture<MatSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSlideToggleComponent ],
      imports: [MatSlideToggleModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSlideToggleComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();

    const checkbox = fixture.debugElement.nativeElement.querySelectorAll('mat-slide-toggle input')[0];

    checkbox.click();

    fixture.detectChanges();

    console.log(fixture.debugElement.nativeElement.querySelectorAll('mat-slide-toggle')[0])


  }));
});
