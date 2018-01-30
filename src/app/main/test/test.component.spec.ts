import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TestComponent } from './test.component';
import { UserService } from '../user.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let userService: UserService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers:    [ UserService ]
    })
    .compileComponents();
  }));

  // beforeEach(inject([UserService], s => {
  //   userService = s;
  // }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

      // UserService from the root injector
    userService = fixture.debugElement.injector.get(UserService);
    
    htmlElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain 'test works p'`, () => {
    const compiled = debugElement.nativeElement;
    // console.log('compiled:  ', compiled.querySelector('p'));
    expect(compiled.querySelector('p').textContent).toContain('test works!');
  });

  it(`should contain 'test works h1'`, () => {
    const de = debugElement.query(By.css('h1'));
    htmlElement = de.nativeElement;
    // console.log('htmlElement:  ', htmlElement.textContent);
    expect(htmlElement.textContent).toContain('test works!');
  });

  it('should create test for login', () => {
    const de = debugElement.queryAll(By.css('p'));
    let arr = [];
    de.forEach(element => {
      arr.push(element.nativeElement.textContent);
    });
    expect(arr[1]).toContain('Please log in.');
  });
});
