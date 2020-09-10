import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgSignUpComponent } from './cfg-sign-up.component';

describe('CfgSignUpComponent', () => {
  let component: CfgSignUpComponent;
  let fixture: ComponentFixture<CfgSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
