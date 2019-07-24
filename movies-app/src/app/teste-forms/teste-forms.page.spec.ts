import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFormsPage } from './teste-forms.page';

describe('TesteFormsPage', () => {
  let component: TesteFormsPage;
  let fixture: ComponentFixture<TesteFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteFormsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
