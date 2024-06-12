import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2'
import { Biller, CreatedDateList } from '../Model/billerModel';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BillerService } from '../biller.service';

@Component({
  selector: 'app-get-unpaid-by-created-date',
  templateUrl: './get-unpaid-by-created-date.component.html',
  styleUrls: ['./get-unpaid-by-created-date.component.scss']
})
export class GetUnpaidByCreatedDateComponent implements OnInit {
  ELEMENT_DATA: CreatedDateList[];
  displayedColumns: string[] = ['Biller name', 'Bill Id', 'Created date', 'Bill description', 'Bill amount due', 'Bill due date', 'Customer Id', 'Customer name'];

  dataSource = new MatTableDataSource<CreatedDateList>(this.ELEMENT_DATA);
  // tslint:disable-next-line:no-inferrable-types
  maxnumberofpage: number = 1000;
  //@ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public form: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  biller_id: number;
  createDate: string;
  loading: boolean;
  createdDate: { countDocument: number; createdDateList: CreatedDateList[]; };
  types$;
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
  getPagesizeOption(): number[] {
    if (this.dataSource.data.length > this.maxnumberofpage) {
      return [20, 50, this.dataSource.data.length]
    } else {
      return [20, 50, this.maxnumberofpage]
    }
  }
  ngOnInit(): void {

    this.form = new FormGroup({

      biller_id: new FormControl('', [Validators.required]),

      createDate: new FormControl('', Validators.required)

    });
    this.types$ = this.getCustomer();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  getUnpaidByCreatedDate() {
    debugger

    this.loading = true;

    this.billerService.getUnpaidByCreatedDate(this.biller_id, this.createDate).subscribe((data) => {
      //this.paidBill = data;
      if (data) {
        this.loading = false;
      }
      let response = {
        countDocument: data.count_doc,
        createdDateList: data.created_date_list
      }
      // Parse from JSON  
      this.createdDate = response;
      this.dataSource.data = response.createdDateList;
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
