import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'


@Injectable({
    providedIn: 'root'
})
export class AlertsService {

    constructor() { }

    success(message: string) {
        Swal.fire({
            title: 'Success!',
            text: message,
            icon: 'success',
            confirmButtonText: 'Ok',
            heightAuto: false,
        })
    }

    error(message: string) {
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok',
            heightAuto: false,
        })
    }

    warning(message: string) {
        Swal.fire({
            title: 'Warning!',
            text: message,
            icon: 'warning',
            confirmButtonText: 'Ok',
            heightAuto: false,
        })
    }
}
