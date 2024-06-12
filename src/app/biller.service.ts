import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'
import { HttpClient } from "@angular/common/http";
import {
  Allpaidbills, AlltotalunpiadDocument, Allunpaidbills,
  Biller, GetUnpaidByCreatedDate, PaidOnebiller, 
  Totalpiadbillsamount, UnpaidOnebiller
} from "./Model/billerModel";

@Injectable({
  providedIn: 'root'
})
export class BillerService {

  url: string = "https://api.billerreport.derash.gov.et/api/biller";
  ur: string = "https://api.billerreport.derash.gov.et/api/biller/update";
  urll : string ="https://api.public.derash.gov.et/customer/billers";
  qa : string = "https://api.efile.mor.derash.gov.et/api/biller/allPaidBills";
  constructor(private http: HttpClient) { }
 //get Customer biller services
 getCustomer(): Observable<Biller> {
  return this.http.get<Biller>(this.urll);
}
  //get one paid biller list
  getPaidOnebiller(
    id: number,
    fromDate: Date,
    toDate: Date
  ): Observable<PaidOnebiller> {
    return this.http.get<PaidOnebiller>(
      this.url + "/PaidOneBiller" +
      "?biller_id=" +
      id +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }
  //get one unpaid biller list
  getUnpaidOnebiller(
    id: number,
    fromDate: Date,
    toDate: Date
  ): Observable<UnpaidOnebiller> {
    return this.http.get<UnpaidOnebiller>(
      this.url + "/unPaidOneBiller" +
      "?biller_id=" +
      id +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }
  //get all paid bill list
  getAllpaidbills(fromDate: Date,
    toDate: Date): Observable<Allpaidbills> {
    return this.http.get<Allpaidbills>(//"/allPaidBills" +
      this.qa + 
      "?fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }
  //get all Unpaid bill list
  getAllunpaidbills(fromDate: Date,
    toDate: Date): Observable<Allunpaidbills> {
    return this.http.get<Allunpaidbills>(
      this.url + "/allUnpaidBills" +
      "?fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }
  //get Total piad bills amount
  getTotalpiadbillsamount(fromDate: Date,
    toDate: Date): Observable<Totalpiadbillsamount> {
    return this.http.get<Totalpiadbillsamount>(
      this.url + "/totalPaidBillsAmountReport" +
      "?fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }
  //get Total Unpiad bills amount
  getAlltotalunpiadDocument(fromDate: Date,
    toDate: Date): Observable<AlltotalunpiadDocument> {
    return this.http.get<AlltotalunpiadDocument>(
      this.url + "/totalUnpaidDocument" +
      "?fromDate=" +
      fromDate +
      "&toDate=" +
      toDate
    );
  }

  ///get Unpaid Biller ByCreated Date 
  getUnpaidByCreatedDate(
    id: number,
    createDate: string
  ): Observable<GetUnpaidByCreatedDate> {
    return this.http.get<GetUnpaidByCreatedDate>(
      this.url + "/GetUnpaidBillerByCreatedDate" +
      "?biller_id=" +
      id +
      "&createdDate=" +
      createDate
    );
  }
  
  //Update One Biller Range
  UpdateOneBillerRange(id: number,
    fromDate: Date,
    toDate: Date, bill_due_dt: Date)
    : Observable<any> {
  
    return this.http.put<GetUnpaidByCreatedDate>(this.ur + "/OneBillerRange" + "?biller_id=" +
    id +
    "&fromDate=" +
    fromDate +
    "&toDate=" +
    toDate, {bill_due_dt});
  }

  //Update One Biller
  UpdateOneBiller(id: number, createdDate: Date,
     bill_due_dt: Date): Observable<any> {
    return this.http.put<GetUnpaidByCreatedDate>(this.ur + "/oneBiller" + "?biller_id=" +
    id + "&createdDate=" +
    createdDate , {bill_due_dt});
  }

  //Get Totall Paid Monthly Report
  getTotalPaidWeeklyReport(){
    return this.http.get<Totalpiadbillsamount>(this.url + "/totalWeeklyPaidReport");
   }
    //Get Totall Paid Monthly Report
    getTotalPaidMonthlyReport(){
      return this.http.get<Totalpiadbillsamount>(this.url + "/totallPaidMonthlyReport");
    }
}