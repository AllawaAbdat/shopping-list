import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgCreateListComponent } from './cfg-create-list.component';

describe('CfgCreateListComponent', () => {
  let component: CfgCreateListComponent;
  let fixture: ComponentFixture<CfgCreateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgCreateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
