import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnPaidBillersList } from '../Model/billerModel';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BillerService } from '../biller.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-all-unpaid-bills',
  templateUrl:'./all-unpaid-bills.component.html',
  styleUrls: ['./all-unpaid-bills.component.scss']
})
export class AllUnpaidBillsComponent implements OnInit {


  ELEMENT_DATA: UnPaidBillersList[] = [];
  displayedColumns: string[] = ['Biller Id', 'Biller name', 'Count'];

  dataSource = new MatTableDataSource<UnPaidBillersList>(this.ELEMENT_DATA);
  maxnumberofpage: number = 1000;
  //@ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public form: FormGroup;
  p: number = 1;
  fromDate: Date;
  toDate: Date;
  loading: Boolean;
  allunpaidBills: { totalNumber: number; allunpaidBillList: UnPaidBillersList[]; };
  warn: ThemePalette;

  constructor(private billerService: BillerService, private router: Router) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPagesizeOption;

  }

   getPagesizeOption(): number[] {
    if (this.dataSource.data.length > this.maxnumberofpage) {
      return [20, 50, this.dataSource.data.length]
    } else {
      return [20, 50, this.maxnumberofpage]
    }
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

      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required)

    });

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  } 

  getAllunpaidbills() {
    debugger
    this.loading = true;
    this.billerService.getAllunpaidbills(this.fromDate, this.toDate).subscribe({
      next:(data) => {
      //this.paidBill = data;
      if (data) {
        this.loading = false;
      }
      let response = {
        totalNumber: data.count,
        allunpaidBillList: data.unpaid_billers_list
      }
      // Parse from JSON  
      this.allunpaidBills = response;
      this.dataSource.data = response.allunpaidBillList;
      console.log("With Parsed JSON :", this.allunpaidBills);
    }, 
    error:_error => {
      this.loading = false;
      swal.fire({
        text: 'Requested data not found!',
        confirmButtonColor: "red"
      });
    }
    })

  }

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
