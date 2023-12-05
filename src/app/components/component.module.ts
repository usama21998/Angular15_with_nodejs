import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SignInModule } from './signin-page/signin.module';
import { DashboardComponent } from './dashboard/dashboard';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './products/product';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        DashboardComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        SignInModule,
        SharedModule,
        MatTableModule
    ],
    providers: [],
})
export class ComponentModule { }
