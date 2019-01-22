import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbUiLibNg7Component } from './jb-ui-lib-ng7.component';

describe('JbUiLibNg7Component', () => {
  let component: JbUiLibNg7Component;
  let fixture: ComponentFixture<JbUiLibNg7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbUiLibNg7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbUiLibNg7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
