import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalComponent]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //Detects angular component's life cycle
  });

  it('should create a HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
