import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgUserProfileComponent } from './cfg-user-profile.component';

describe('CfgUserProfileComponent', () => {
  let component: CfgUserProfileComponent;
  let fixture: ComponentFixture<CfgUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
