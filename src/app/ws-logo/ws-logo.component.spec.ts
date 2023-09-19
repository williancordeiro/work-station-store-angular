import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsLogoComponent } from './ws-logo.component';

describe('WsLogoComponent', () => {
  let component: WsLogoComponent;
  let fixture: ComponentFixture<WsLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WsLogoComponent]
    });
    fixture = TestBed.createComponent(WsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
