import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePairComponent } from './calculate-pair.component';

describe('CalculatePairComponent', () => {
  let component: CalculatePairComponent;
  let fixture: ComponentFixture<CalculatePairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
