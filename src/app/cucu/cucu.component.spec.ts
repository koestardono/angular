import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuComponent } from './cucu.component';

describe('CucuComponent', () => {
  let component: CucuComponent;
  let fixture: ComponentFixture<CucuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CucuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
