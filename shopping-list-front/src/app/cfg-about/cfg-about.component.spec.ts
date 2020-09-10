import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgAboutComponent } from './cfg-about.component';

describe('CfgAboutComponent', () => {
  let component: CfgAboutComponent;
  let fixture: ComponentFixture<CfgAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
