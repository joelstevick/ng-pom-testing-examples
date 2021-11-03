import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { MatSlideToggleComponent } from './mat-slide-toggle.component';
import { render } from '@testing-library/angular';

fdescribe('MatSlideToggleComponent.', () => {
  let component: MatSlideToggleComponent;
  let fixture: ComponentFixture<MatSlideToggleComponent>;

  beforeEach(async () => {
    const results = await render(MatSlideToggleComponent, { imports: [MatSlideToggleModule]} )

    fixture = results.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create.', fakeAsync(() => {
    expect(component).toBeTruthy();

    const checkbox = fixture.debugElement.nativeElement.querySelectorAll('mat-slide-toggle input')[0];

    expect(fixture.debugElement.nativeElement.querySelectorAll('mat-slide-toggle')[0].querySelectorAll('[aria-checked=false]')[0]).toBeTruthy();

    checkbox.click();

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelectorAll('mat-slide-toggle')[0].querySelectorAll('[aria-checked=true]')[0]).toBeTruthy();


  }));
});
