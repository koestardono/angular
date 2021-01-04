import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.component.html',

})
export class HomeComponent implements OnInit {
    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        this.router.navigate(['/login']);
        console.log('cobaa apa nih');
    }
}
