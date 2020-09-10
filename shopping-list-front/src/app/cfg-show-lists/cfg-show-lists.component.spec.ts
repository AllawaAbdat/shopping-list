import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgShowListsComponent } from './cfg-show-lists.component';

describe('CfgShowListsComponent', () => {
  let component: CfgShowListsComponent;
  let fixture: ComponentFixture<CfgShowListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgShowListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgShowListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
