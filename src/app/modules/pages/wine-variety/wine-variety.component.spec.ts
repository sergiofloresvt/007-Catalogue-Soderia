import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineVarietyComponent } from './wine-variety.component';

describe('WineVarietyComponent', () => {
  let component: WineVarietyComponent;
  let fixture: ComponentFixture<WineVarietyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineVarietyComponent]
    });
    fixture = TestBed.createComponent(WineVarietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
