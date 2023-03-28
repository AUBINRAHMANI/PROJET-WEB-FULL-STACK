import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConfigurationService, ButtonConfiguration} from "../../service/configuration.service";

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
}
