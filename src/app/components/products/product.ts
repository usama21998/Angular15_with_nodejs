import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';



@Component({
    selector: 'product',
    templateUrl: './product.html',
})
export class ProductComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['name', 'price', 'quantity', 'image'];
    dataSource: any
    constructor(private httpService: HttpRequestsService) {

    }

    ngOnInit(): void {
        this.getProducts()
    }

    ngAfterViewInit(): void {

    }

    getProducts() {
        this.httpService.getProducts().subscribe(res => {
            this.dataSource = res
        })
    }

}
