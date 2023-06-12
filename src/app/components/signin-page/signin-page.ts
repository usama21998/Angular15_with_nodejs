import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Component({
    selector: 'signin-page',
    templateUrl: './signin-page.html',
})
export class SignInComponent implements OnInit {
    signinFrom: FormGroup;

    constructor(private _formBuilder: FormBuilder, private router: Router, private generalService: GeneralService, private httpService: HttpRequestsService) {
        this.signinFrom = this._formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    ngOnInit(): void {

    }

    onSubmit(formStatus: boolean, formValue: any) {
        if (formStatus) {
            this.httpService.login(formValue).subscribe(res => {
                this.router.navigate(['/dashboard']);
                sessionStorage.setItem('username', formValue.email)
            }, error => {
                console.log(error.message)
            })

        }
    }




}
