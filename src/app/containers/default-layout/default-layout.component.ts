import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';

import { Router,ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../../views/login/login.component'  
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  selected :any;
  list:any;
  firstname:any;
  constructor(private router: Router,) {
    this.list = [
      
      'Analysis',
      'Historictrend',
      
   ];
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    var firstname= localStorage.getItem("firstname");
    this.firstname=firstname.replace(/(^"|"$)/g, '');
  }
  select(item) {
    this.selected = item; 
    if (item=="Analysis"){
      this.router.navigate(['/layout/analysis']);
    }
   
    else if (item=="Historictrend"){
      this.router.navigate(['/layout/historictrend']);
    }
};
isActive(item) {
    return this.selected === item;
};
}
