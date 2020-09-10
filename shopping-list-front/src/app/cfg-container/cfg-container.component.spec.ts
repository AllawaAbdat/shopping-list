import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgContainerComponent } from './cfg-container.component';

describe('CfgContainerComponent', () => {
  let component: CfgContainerComponent;
  let fixture: ComponentFixture<CfgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
