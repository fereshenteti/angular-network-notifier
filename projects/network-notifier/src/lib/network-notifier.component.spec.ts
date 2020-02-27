import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNotifierComponent } from './network-notifier.component';

describe('NetworkNotifierComponent', () => {
  let component: NetworkNotifierComponent;
  let fixture: ComponentFixture<NetworkNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
