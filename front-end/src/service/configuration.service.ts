import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
/*import {
  AdaptCalibrageButtonSizeDirective,
  ButtonConfiguration, BIG_ONE, NORMAL_BUTTON
} from "../app/adaptButtonSize/adapt-calibrage-button-size.directive";*/


export interface ButtonConfiguration {
  niveau? : number;
  buttonWidth: string;
  buttonHeight: string;
  fontSize: string;
  borderRadius?: string;
  boxShadow?:string;
  backgroundColor?: string;
  disabledOpacity?: number;
  hoverBackgroundColor?:string;
  color?: string;
  transition ?: string;
}
const DEFAULT_CONFIG: ButtonConfiguration = {
  buttonWidth: '300px',
  buttonHeight: '300px',
  fontSize: '70px',
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private buttonConfiguration:ButtonConfiguration = DEFAULT_CONFIG;
  /*private buttonCalConfiguration:ButtonConfiguration = BIG_ONE;*/
  public buttonConfiguration$: BehaviorSubject<ButtonConfiguration> = new BehaviorSubject<ButtonConfiguration>(this.buttonConfiguration);

  /*public buttonCalConfiguration$: BehaviorSubject<ButtonConfiguration> = new BehaviorSubject<ButtonConfiguration>(this.buttonCalConfiguration);
*/
  constructor() { }

  updateButtonConfiguration(newConfiguration: ButtonConfiguration) {
    this.buttonConfiguration = newConfiguration;
    this.buttonConfiguration$.next(this.buttonConfiguration);
  }

 /* updateButtonCalConfiguration(num:number|undefined) {
    if(num=0){
      this.buttonCalConfiguration = NORMAL_BUTTON;
    }else{
      this.buttonCalConfiguration=BIG_ONE;
    }

    this.buttonCalConfiguration$.next(this.buttonCalConfiguration);
  }*/
}
