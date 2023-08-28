import {Component, Input, OnChanges, signal} from '@angular/core';

@Component({
  selector: 'app-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.scss']
})
export class TemperatureGaugeComponent implements OnChanges {
  @Input() maxTemp? : number;
  @Input() minTemp? : number;
  @Input() currentTemp? : number;

  needleAngle: number = 135;
  errorText: string | null = null;

  /**
   * When the inputs change, recalculate the angle of the needle
   */
  ngOnChanges() {
    this.calculateAngle();
  }

  /**
   * Calculate the angle of the needle based on the current temperature
   */
  calculateAngle(): void {
    if (this.validateInputs()) {
      this.errorText = null;
      const angle = ( (this.currentTemp! - this.minTemp!) / (this.maxTemp! - this.minTemp!) )* 270;
      this.needleAngle = 135 + angle;
    } else {
      this.errorText = 'error';
      this.needleAngle = 135;
    }
  }

  /**
   * Validate the inputs to make sure they are valid
   */
  validateInputs(): boolean {
    if (this.maxTemp !== undefined && this.minTemp !== undefined && this.currentTemp !== undefined) {
      if (this.maxTemp < this.minTemp) {
        this.maxTemp = this.minTemp;
        return false;
      }
      if (this.currentTemp < this.minTemp) {
        this.currentTemp = this.minTemp;
        return false;
      }
      if (this.currentTemp > this.maxTemp) {
        this.currentTemp = this.maxTemp;
        return false;
      }
      return true;
    } else {
      return false;
    }


  }

}
