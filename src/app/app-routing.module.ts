import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ProductComponent } from './components/products/product';
import { SignInComponent } from './components/signin-page/signin-page';

const routes: Routes = [{
  path: '', component: SignInComponent,
  children: [
    { path: '', component: SignInComponent },
  ]
}, {
  path: 'dashboard', component: DashboardComponent,
},
{
  path: 'product', component: ProductComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
