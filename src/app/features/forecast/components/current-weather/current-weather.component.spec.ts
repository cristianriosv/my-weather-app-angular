import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrentWeatherComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    component.data = {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
