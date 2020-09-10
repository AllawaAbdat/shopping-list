import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgSignInComponent } from './cfg-sign-in.component';

describe('CfgSignInComponent', () => {
  let component: CfgSignInComponent;
  let fixture: ComponentFixture<CfgSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
