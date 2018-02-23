import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLoopComponent } from './grid-loop.component';

describe('GridLoopComponent', () => {
  let component: GridLoopComponent;
  let fixture: ComponentFixture<GridLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
