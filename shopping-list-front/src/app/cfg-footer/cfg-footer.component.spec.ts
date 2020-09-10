import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgFooterComponent } from './cfg-footer.component';

describe('CfgFooterComponent', () => {
  let component: CfgFooterComponent;
  let fixture: ComponentFixture<CfgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
