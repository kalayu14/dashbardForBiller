import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../Service/UserService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  
  constructor(config: NgbDropdownConfig , private userService: UserService, private router: Router) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }
  
  // toggle sidebar in small devices
  toggleOffcanvas() {
    const sidebarOffcanvas = document.querySelector('.sidebar-offcanvas');
    if (sidebarOffcanvas) {
      sidebarOffcanvas.classList.toggle('active');
    }
  }

  // toggle sidebar
  toggleSidebar() {
    const body = document.body;
    if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }
  onLogout(){
    debugger
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

}
