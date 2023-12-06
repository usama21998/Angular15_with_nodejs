import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { GeneralService } from 'src/app/services/general.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {
    userName: any

    constructor(private router: Router) {
        this.userName = sessionStorage.getItem('username');
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {

    }

    onClick(route: string) {
        this.router.navigate([`/${route}`]);
    }
}
