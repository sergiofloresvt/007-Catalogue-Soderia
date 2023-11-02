import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrDetailComponent } from './producr-detail.component';

describe('ProducrDetailComponent', () => {
  let component: ProducrDetailComponent;
  let fixture: ComponentFixture<ProducrDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducrDetailComponent]
    });
    fixture = TestBed.createComponent(ProducrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
