import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biller, UnpaidBillersList } from '../Model/billerModel';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2'
import { MatSort } from '@angular/material/sort';
import { BillerService } from '../biller.service';

@Component({
  selector: 'app-un-paid-one-biller',
  templateUrl: './un-paid-one-biller.component.html',
  styleUrls: ['./un-paid-one-biller.component.scss']
})
export class UnPaidOneBillerComponent implements OnInit {

  ELEMENT_DATA: UnpaidBillersList[]=[];
  displayedColumns: string[] = ['biller name', 'Bill Id', 'Bill-Description', 'Bill amount due', 'Bill-due-date', 'Customer Id', 'Customer Name', 'Created Date'];
  dataSource = new MatTableDataSource<UnpaidBillersList>(this.ELEMENT_DATA);
  maxnumberofpage: number = 1000;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public form: FormGroup;
  p = 1;
  biller_id: number;
  fromDate: Date;
  toDate: Date;
  loading: boolean;
  unpaidOnebiller: { totalNumber: number; unpaidBillersList: UnpaidBillersList[]; };
 
  billers: Biller;

  constructor(private billerService: BillerService, private router: Router) { }

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
    //this.types$ = this.getCustomer();
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

  getUnpaidOnebiller() {
    debugger
    this.loading = true;

    this.billerService.getUnpaidOnebiller(this.biller_id, this.fromDate, this.toDate).subscribe({
      next:(data) => {
      //this.paidBill = data;
      if (data) {
        this.loading = false;
      }
      let response = {
        totalNumber: data.all_unpaid_bill,
        unpaidBillersList: data.unpaid_billers_list
      }
      // Parse from JSON  
      this.unpaidOnebiller = response;
      this.dataSource.data = response.unpaidBillersList;

    }, 
    error:_error => {
      this.loading = false;
      swal.fire({
        text: 'Requested data not found!',
        confirmButtonColor: 'red'
      });
    }
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
    /* table id is passed over here */
    let element = document.getElementById('report-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}

