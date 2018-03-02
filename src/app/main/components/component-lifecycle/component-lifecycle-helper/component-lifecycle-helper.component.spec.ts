import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleHelperComponent } from './component-lifecycle-helper.component';

describe('ComponentLifecycleHelperComponent', () => {
  let component: ComponentLifecycleHelperComponent;
  let fixture: ComponentFixture<ComponentLifecycleHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifecycleHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
