import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPaidBillsComponent } from './all-paid-bills/all-paid-bills.component';
import { AllUnpaidBillsComponent } from './all-unpaid-bills/all-unpaid-bills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetUnpaidByCreatedDateComponent } from './get-unpaid-by-created-date/get-unpaid-by-created-date.component';
import { LoginComponent } from './login/login.component';
import { PaidOneBillerComponent } from './paid-one-biller/paid-one-biller.component';
import { RegisterComponent } from './register/register.component';
import { TotalPaidBillsAmountReportComponent } from './total-paid-bills-amount-report/total-paid-bills-amount-report.component';
import { TotalUnpaidDocumentComponent } from './total-unpaid-document/total-unpaid-document.component';
import { UnPaidOneBillerComponent } from './un-paid-one-biller/un-paid-one-biller.component';
import { UpdateOneBillerRangeComponent } from './update-one-biller-range/update-one-biller-range.component';
import { UpdateOneBillerComponent } from './update-one-biller/update-one-biller.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, /* , canActivate:[AuthGuard] */
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'paidone', component: PaidOneBillerComponent, canActivate:[AuthGuard]},
  { path: 'unpaidone', component: UnPaidOneBillerComponent, canActivate:[AuthGuard]},
  { path: 'allpaid', component: AllPaidBillsComponent, canActivate:[AuthGuard]},
  { path: 'allunpaid', component: AllUnpaidBillsComponent, canActivate:[AuthGuard] },
  { path: 'totalpaid', component: TotalPaidBillsAmountReportComponent, canActivate:[AuthGuard]},
  { path: 'totalunpaid', component: TotalUnpaidDocumentComponent, canActivate:[AuthGuard]},
  { path: 'unpaidByCreatedDate', component: GetUnpaidByCreatedDateComponent, canActivate:[AuthGuard]},
  { path: 'updateOneBillerRange', component: UpdateOneBillerRangeComponent, canActivate:[AuthGuard]},
  { path: 'updateOneBiller', component: UpdateOneBillerComponent, canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
