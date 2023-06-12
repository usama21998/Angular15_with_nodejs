import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { SignInComponent } from './components/signin-page/signin-page';

const routes: Routes = [{
  path: '', component: SignInComponent,
  children: [
    { path: '', component: SignInComponent },
  ]
}, {
  path: 'dashboard', component: DashboardComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
