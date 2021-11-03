import {
  ComponentFixture,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { render } from '@testing-library/angular';
import { MatSelectComponent } from './mat-select.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatSelectHarness} from '@angular/material/select/testing';

fdescribe('MatSelectComponent.', () => {
  let component: MatSelectComponent;
  let fixture: ComponentFixture<MatSelectComponent>;

  beforeEach(fakeAsync(async () => {
    const results = await render(MatSelectComponent, {
      imports: [MatSelectModule],
    });

    fixture = results.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();

    const rootLoader: HarnessLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const matSelectHarnesses = await rootLoader.getAllHarnesses(MatSelectHarness);
    console.log(await (await matSelectHarnesses[0].host()))
    // await matSelectHarness.open();
    // const options = await matSelectHarness.getOptions();
    // console.log(await options[1].getText());
    // fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy()
  }));
});
