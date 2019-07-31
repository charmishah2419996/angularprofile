import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbasecomponentComponent } from './formbasecomponent.component';

describe('FormbasecomponentComponent', () => {
  let component: FormbasecomponentComponent;
  let fixture: ComponentFixture<FormbasecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbasecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbasecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
