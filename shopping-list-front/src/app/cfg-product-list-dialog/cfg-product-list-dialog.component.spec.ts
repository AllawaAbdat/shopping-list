import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgProductListDialogComponent } from './cfg-product-list-dialog.component';

describe('CfgProductListDialogComponent', () => {
  let component: CfgProductListDialogComponent;
  let fixture: ComponentFixture<CfgProductListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgProductListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgProductListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
