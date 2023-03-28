import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface ButtonConfiguration {
  buttonWidth: string;
}

const DEFAULT_CONFIG: ButtonConfiguration = {
  buttonWidth: '100px',
}
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private buttonConfiguration:ButtonConfiguration = DEFAULT_CONFIG;

  public buttonConfiguration$: BehaviorSubject<ButtonConfiguration> = new BehaviorSubject<ButtonConfiguration>(this.buttonConfiguration);

  constructor() { }

  updateButtonConfiguration(newConfiguration: ButtonConfiguration) {
    this.buttonConfiguration = newConfiguration;
    this.buttonConfiguration$.next(this.buttonConfiguration);
  }
}
