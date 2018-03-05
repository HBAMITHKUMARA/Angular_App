import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditSubComponent } from './book-edit-sub.component';

describe('BookEditSubComponent', () => {
  let component: BookEditSubComponent;
  let fixture: ComponentFixture<BookEditSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
