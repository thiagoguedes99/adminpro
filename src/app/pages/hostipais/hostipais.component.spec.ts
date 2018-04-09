import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostipaisComponent } from './hostipais.component';

describe('HostipaisComponent', () => {
  let component: HostipaisComponent;
  let fixture: ComponentFixture<HostipaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostipaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
