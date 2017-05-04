import { Component} from '@angular/core';

@Component({
  selector: 'portfolio-content',
  templateUrl: 'portfolio-content.component.html',
  styleUrls: ['portfolio-content.component.css']
})
export class PortfolioContentComponent {
  title = "Portfolio Works!";

  gallery : string[] = [];

  constructor() {
    for (let i = 1; i < 58; i++) {
      const imageString: string = "./assets/portfolio/portfolio-" + i.toString() + ".jpg";
      this.gallery.push(imageString);
    }
  }
}
