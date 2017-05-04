import { Component} from '@angular/core';

import { ScrollToTopService } from './scroll-to-top.service';

@Component({
  selector: 'portfolio-content',
  templateUrl: 'portfolio-content.component.html',
  styleUrls: ['portfolio-content.component.css'],
  providers: [ScrollToTopService]
})
export class PortfolioContentComponent {

  gallery : string[] = [];

  constructor(public scrollToTopService: ScrollToTopService) {
    for (let i = 1; i < 58; i++) {
      const imageString: string = "./assets/portfolio/portfolio-" + i.toString() + ".jpg";
      this.gallery.push(imageString);
    }
  }
}
