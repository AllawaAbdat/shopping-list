import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgNavbarComponent } from './cfg-navbar.component';

describe('CfgNavbarComponent', () => {
  let component: CfgNavbarComponent;
  let fixture: ComponentFixture<CfgNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
