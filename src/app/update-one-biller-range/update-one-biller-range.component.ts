import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biller } from '../Model/billerModel';
import swal from 'sweetalert2'
import { BillerService } from '../biller.service';
import { setDate } from 'ngx-bootstrap/chronos/utils/date-setters';
@Component({
  selector: 'app-update-one-biller-range',
  templateUrl: './update-one-biller-range.component.html',
  styleUrls: ['./update-one-biller-range.component.scss']
})
export class UpdateOneBillerRangeComponent implements OnInit {
  public form: FormGroup;
  biller_id: number;
  fromDate: Date;
  toDate: Date;
  bill_due_dt: Date;
  loading: boolean;
  
  billers: Biller;
  totalupdate: { totalModified: any; };

  constructor(private billerService: BillerService, private router: Router) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({

      biller_id: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      bill_due_dt: new FormControl('', Validators.required)

    });
    this.types$ = this.getCustomer();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  UpdateOneBillerRange() {
    debugger
    this.loading = true;
    this.billerService.UpdateOneBillerRange(this.biller_id, this.fromDate, this.toDate, this.bill_due_dt).
      subscribe(data => {
        if (data) {
          this.loading = false;
        }
        let modified = { totalModified: data.doc.nModified }
        this.totalupdate = modified;
        swal.fire({
          text: this.totalupdate.totalModified.toString() + ' documents are updated',
          confirmButtonColor: 'red'
        });

      }, _error => {
        this.loading = false;
        swal.fire({
          text: 'Updated Error!',
          confirmButtonColor: 'red'
        });
      })
    this.biller_id = 0
    this.fromDate = new Date();
    this.toDate = new Date();
    this.bill_due_dt = new Date();
  }

  getCustomer() {
    debugger;
    this.billerService.getCustomer().subscribe(response => {
    this.billers = response;
      console.log(response);
    }
    );
  }
}
