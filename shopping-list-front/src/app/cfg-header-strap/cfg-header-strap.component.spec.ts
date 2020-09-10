import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgHeaderStrapComponent } from './cfg-header-strap.component';

describe('CfgHeaderStrapComponent', () => {
  let component: CfgHeaderStrapComponent;
  let fixture: ComponentFixture<CfgHeaderStrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgHeaderStrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgHeaderStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
