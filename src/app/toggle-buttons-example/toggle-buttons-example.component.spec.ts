import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';

describe('ToggleButtonsExampleComponent', () => {
  let component: ToggleButtonsExampleComponent;
  let fixture: ComponentFixture<ToggleButtonsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleButtonsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
