import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { PaidOneBillerComponent } from './paid-one-biller/paid-one-biller.component';
import { UnPaidOneBillerComponent } from './un-paid-one-biller/un-paid-one-biller.component';
import { AllPaidBillsComponent } from './all-paid-bills/all-paid-bills.component';
import { AllUnpaidBillsComponent } from './all-unpaid-bills/all-unpaid-bills.component';
import { TotalPaidBillsAmountReportComponent } from './total-paid-bills-amount-report/total-paid-bills-amount-report.component';
import { TotalUnpaidDocumentComponent } from './total-unpaid-document/total-unpaid-document.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './Service/UserService';
import { GetUnpaidByCreatedDateComponent } from './get-unpaid-by-created-date/get-unpaid-by-created-date.component';
import { UpdateOneBillerRangeComponent } from './update-one-biller-range/update-one-biller-range.component';
import { UpdateOneBillerComponent } from './update-one-biller/update-one-biller.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BillerService } from './biller.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    PaidOneBillerComponent,
    UnPaidOneBillerComponent,
    AllPaidBillsComponent,
    AllUnpaidBillsComponent,
    TotalPaidBillsAmountReportComponent,
    TotalUnpaidDocumentComponent,
    LoginComponent,
    RegisterComponent,
    GetUnpaidByCreatedDateComponent,
    UpdateOneBillerRangeComponent,
    UpdateOneBillerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BaseChartDirective,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,

    useClass: AuthInterceptor,
    multi: true
  },provideCharts(withDefaultRegisterables()), BillerService, UserService, AuthGuard, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
