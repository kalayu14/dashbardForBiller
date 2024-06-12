import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'derash';

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean;

  constructor(private router: Router) {
    // Constructor code...
  }

  ngOnInit() {
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // Event handler for NavigationStart
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.handleNavigationStart(event);
      }
    });
  }

  handleNavigationStart(event: NavigationStart) {
    if (
      event.url === '/' ||
      event.url === '/login' ||
      event.url === '/signup' ||
      event.url === '/error-pages/404' ||
      event.url === '/error-pages/500'
    ) {
      this.showSidebar = false;
      this.showNavbar = false;
      this.showFooter = false;
      document.querySelector('.main-panel')?.classList.add('w-100');
      document.querySelector('.page-body-wrapper')?.classList.add('full-page-wrapper');
      document.querySelector('.content-wrapper')?.classList.remove('auth', 'auth-img-bg');
      document.querySelector('.content-wrapper')?.classList.remove('auth', 'lock-full-bg');
      if (event.url === '/error-pages/404' || event.url === '/error-pages/500') {
        document.querySelector('.content-wrapper')?.classList.add('p-0');
      }
    } else {
      this.showSidebar = true;
      this.showNavbar = true;
      this.showFooter = true;
      document.querySelector('.main-panel')?.classList.remove('w-100');
      document.querySelector('.page-body-wrapper')?.classList.remove('full-page-wrapper');
      document.querySelector('.content-wrapper')?.classList.remove('auth', 'auth-img-bg');
      document.querySelector('.content-wrapper')?.classList.remove('p-0');
    }
  }
}