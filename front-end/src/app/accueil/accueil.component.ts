import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild(NgbCarousel)
  private carousel: NgbCarousel | undefined;

  selectCurrentSlide() {
    // @ts-ignore
    this.carousel.select(this.carousel.activeId);
  }
}
