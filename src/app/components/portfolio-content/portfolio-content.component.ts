import { Component} from '@angular/core';

import { GalleryImage } from './gallery-image';
import { ScrollToTopService } from './scroll-to-top.service';

@Component({
  selector: 'portfolio-content',
  templateUrl: 'portfolio-content.component.html',
  styleUrls: ['portfolio-content.component.css'],
  providers: [ScrollToTopService]
})
export class PortfolioContentComponent {

  gallery: GalleryImage[] = [];

  constructor(public scrollToTopService: ScrollToTopService) {
    for (let i = 1; i < 101; i++) {
      const smImgString: string = "./assets/portfolio/portfolio-" + i.toString() + ".jpg";
      const lgImgString: string = "./assets/portfolio/large/portfolio-" + i.toString() + "-lg.jpg";
      const currentImage = {
        smUrl: smImgString,
        lgUrl: lgImgString
      };

      this.gallery.push(currentImage);
    }
  }

}
