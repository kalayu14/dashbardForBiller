import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biller, PaidBillersList } from '../Model/billerModel';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2'
import { MatSort } from '@angular/material/sort';
import { BillerService } from '../biller.service';


@Component({
  selector: 'app-paid-one-biller',
  templateUrl: './paid-one-biller.component.html',
  styleUrls: ['./paid-one-biller.component.scss']
})
export class PaidOneBillerComponent implements OnInit {

  ELEMENT_DATA: PaidBillersList[] = [];
  displayedColumns: string[] = ['biller name', 'Bill Id', 'Bill-Description', 'Bill amount due', 'Bill-due-date', 'Customer Id', 'Customer Name', 'Agent transaction code', 'Agent Id', 'Paid at', 'Paid date', 'Paid Amount'];

  dataSource = new MatTableDataSource<PaidBillersList>(this.ELEMENT_DATA);
  // tslint:disable-next-line:no-inferrable-types
  maxnumberofpage: number = 1000;
  //@ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public form: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  // tslint:disable-next-line:variable-name
  biller_id: number;
  fromDate: Date;
  toDate: Date;
  loading: boolean;
  paidOnebiller: { totalNumber: number; paidBillersList: PaidBillersList[]; };
  types$: void;
  billers: Biller;

  constructor(private billerService: BillerService, private router: Router) {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPagesizeOption();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {

    this.form = new FormGroup({

      biller_id: new FormControl('', [Validators.required]),

      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required)

    });
    this.types$ = this.getCustomer();
  }

 public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  } 
 
  getPagesizeOption(): number[] {
    if (this.dataSource.data.length > this.maxnumberofpage) {
      return [20, 50, this.dataSource.data.length]
    } else {
      return [20, 50, this.maxnumberofpage]
    }
  }
  getPaidOnebiller() {
    debugger

    this.loading = true;

    this.billerService.getPaidOnebiller(this.biller_id, this.fromDate, this.toDate).subscribe((data) => {
      //this.paidBill = data;
      if (data) {
        this.loading = false;
      }
      debugger
      let response = {
        totalNumber: data.totall_paid_biller_document,
        paidBillersList: data.Paid_billers_list
      }
      // Parse from JSON  
      this.paidOnebiller = response;
      this.dataSource.data = response.paidBillersList
      console.log('With Parsed JSON :', this.paidOnebiller);
    }, _error => {
      this.loading = false;
      swal.fire({
        text: 'Requested data not found!',
        confirmButtonColor: 'red'
      });
    })
  }
  getCustomer() {
    debugger;
    this.billerService.getCustomer().subscribe(response => {
      this.billers = response;
      console.log(response);
    }
    );
  }

 
  // tslint:disable-next-line:member-ordering
  fileName = 'ExcelSheet.xlsx';

  exportexcel(): void {
    debugger
    /* table id is passed over here */
    let element = document.getElementById('report-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
