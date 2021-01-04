import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  // templateUrl: './home/home.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kustar';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('coba apa niih anjim');
    this.router.navigate(['login']);
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    // });
  }
}
