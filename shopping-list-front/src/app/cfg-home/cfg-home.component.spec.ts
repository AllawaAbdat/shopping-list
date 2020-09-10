import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgHomeComponent } from './cfg-home.component';

describe('CfgHomeComponent', () => {
  let component: CfgHomeComponent;
  let fixture: ComponentFixture<CfgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
