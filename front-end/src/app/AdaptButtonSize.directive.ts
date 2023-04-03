import {Directive, ElementRef} from '@angular/core';
import {ConfigurationService} from "../service/configuration.service";

@Directive({
  selector: '[AdaptButtonSize]'
})
export class AdaptButtonSizeDirective {

  constructor(private el: ElementRef, private configurationService: ConfigurationService) {
    this.configurationService.buttonConfiguration$.subscribe(configuration => {
      this.el.nativeElement.style.minWidth = configuration.buttonWidth;
      this.el.nativeElement.style.minHeight = configuration.buttonHeight;
    });
  }

}
