import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgAddProductComponent } from './cfg-add-product.component';

describe('CfgAddProductComponent', () => {
  let component: CfgAddProductComponent;
  let fixture: ComponentFixture<CfgAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
