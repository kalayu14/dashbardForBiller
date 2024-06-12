import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../Model/billerModel';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BillerService } from '../biller.service';

@Component({
  selector: 'app-total-unpaid-document',
  templateUrl: './total-unpaid-document.component.html',
  styleUrls: ['./total-unpaid-document.component.scss']
})
export class TotalUnpaidDocumentComponent implements OnInit {
  ELEMENT_DATA: Result[];
  displayedColumns: string[] = ['UnPaid time', 'Total Unpaid'];

  dataSource = new MatTableDataSource<Result>(this.ELEMENT_DATA);
  maxnumberofpage: number = 1000;
  //@ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public form: FormGroup;

  fromDate: Date;
  toDate: Date;
  loading: boolean;
  alltotalUnpaidDocment: { totalUnpaidDocment: Result[]; };

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
  getAlltotalunpiadDocument() {
    debugger
    this.loading = true;
    this.billerService.getAlltotalunpiadDocument(this.fromDate, this.toDate).subscribe((data) => {
      //this.paidBill = data;
      if (data) {
        this.loading = false;
      }
      let response = {
        totalUnpaidDocment: data.result
      }
      // Parse from JSON  
      this.alltotalUnpaidDocment = response;
      this.dataSource.data = response.totalUnpaidDocment
    }, _error => {
      this.loading = false;
      swal.fire({
        text: 'Requested data not found!',
        confirmButtonColor: "red"
      });
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