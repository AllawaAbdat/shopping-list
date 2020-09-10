import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgUserComponent } from './cfg-user.component';

describe('CfgUserComponent', () => {
  let component: CfgUserComponent;
  let fixture: ComponentFixture<CfgUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
