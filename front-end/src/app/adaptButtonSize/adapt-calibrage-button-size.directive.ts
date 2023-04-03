/*import {Directive, ElementRef, Input} from '@angular/core';
import {ConfigurationService} from "../../service/configuration.service";
export interface ButtonConfiguration {
  niveau? : number;
  buttonWidth: string;
  buttonHeight?: string;
  fontSize?: string;
  borderRadius?: string;
  boxShadow?:string;
  backgroundColor?: string;
  disabledOpacity?: number;
  hoverBackgroundColor?:string;
  color?: string;
  transition ?: string;
}

export const BIG_ONE : ButtonConfiguration ={
  niveau:5,
  buttonWidth: '250px',
  buttonHeight: '60px',
  fontSize: '24px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#007bff',
  color: '#fff',
  disabledOpacity: 0.5,
  hoverBackgroundColor: '#0069d9',
  transition: 'all 0.2s ease-in-out'
}

export const NORMAL_BUTTON :ButtonConfiguration={
  niveau:0,
  buttonWidth:'100px',
  buttonHeight: '60px',
  fontSize: '16px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#007bff',
  color: '#fff',
  disabledOpacity: 0.5,
  hoverBackgroundColor: '#0069d9',
  transition: 'all 0.2s ease-in-out'
}*/
/*@Directive({
  selector: '[appAdaptCalibrageButtonSize]'
})
export class AdaptCalibrageButtonSizeDirective {

  @Input() size: string | undefined;
  private conf: ButtonConfiguration = BIG_ONE;*/
  /*constructor(private el: ElementRef, private configurationService: ConfigurationService) {
    this.configurationService.buttonCalConfiguration$.subscribe(configuration => {
      this.el.nativeElement.style.width = this.size;
      this.el.nativeElement.style.height = this.size;
      this.el.nativeElement.style.fontSize = this.conf.fontSize;
      this.el.nativeElement.style.borderRadius = this.conf.borderRadius;
      this.el.nativeElement.style.boxShadow = this.conf.boxShadow;
      this.el.nativeElement.style.backgroundColor = this.conf.backgroundColor;
      this.el.nativeElement.style.color = this.conf.color;
      // @ts-ignore
      this.el.nativeElement.style.opacity = this.conf.disabledOpacity.toString();
      this.el.nativeElement.style.transition = this.conf.transition;
    });
  }


}*/


