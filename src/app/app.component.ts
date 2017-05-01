import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Hiding the preloader once the view is loaded
    let preloaderElementRef = document.getElementById('preloader');
    if (preloaderElementRef !== null) {
      preloaderElementRef.style['display'] = 'none';
    }
  }
}
