import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';



@Component({
    selector: 'user',
    templateUrl: './user.html',
})
export class UserComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['email', 'createdAt'];
    dataSource: any
    constructor(private listingService: HttpRequestsService) {

    }

    ngOnInit(): void {
        this.getUsers()
    }

    ngAfterViewInit(): void {

    }

    getUsers() {
        this.listingService.getUsers().subscribe(res => {
            this.dataSource = res
        })
    }

}
