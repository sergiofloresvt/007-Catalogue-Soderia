import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWspComponent } from './btn-wsp.component';

describe('BtnWspComponent', () => {
  let component: BtnWspComponent;
  let fixture: ComponentFixture<BtnWspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnWspComponent]
    });
    fixture = TestBed.createComponent(BtnWspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
