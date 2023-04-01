import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ButtonConfiguration, ConfigurationService} from "../../service/configuration.service";
/*import {ButtonConfiguration} from "../adaptButtonSize/adapt-calibrage-button-size.directive";*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPage!: string;

  constructor(private route: ActivatedRoute, private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.currentPage = urlSegments.join('/');
      console.log(this.currentPage);
      console.log(urlSegments);
    });
  }

  updateButtonConfiguration(newConfiguration: ButtonConfiguration) {
    this.configurationService.updateButtonConfiguration(newConfiguration);
  }
  /*updateButtonCalConfiguration(num:number|undefined) {
    this.configurationService.updateButtonCalConfiguration(num);
  }*/
}
