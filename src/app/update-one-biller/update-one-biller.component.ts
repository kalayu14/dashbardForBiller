import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biller, PaidBillersList } from '../Model/billerModel';
import swal from 'sweetalert2'
import { BillerService } from '../biller.service';


@Component({
  selector: 'app-update-one-biller',
  templateUrl: './update-one-biller.component.html',
  styleUrls: ['./update-one-biller.component.scss']
})
export class UpdateOneBillerComponent implements OnInit {
  public form: FormGroup;
  p: number = 1;
  biller_id: number;
  createdDate: Date;
  bill_due_dt: Date;
  loading: boolean;
  types$;
  billers: Biller;
  totalupdate: { totalModified: any; };
  paidOnebiller: { totalNumber: number; paidBillersList: PaidBillersList[]; };

  constructor(private billerService: BillerService, private router: Router) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({

      biller_id: new FormControl('', [Validators.required]),
      createdDate: new FormControl('', Validators.required),
      bill_due_dt: new FormControl('', Validators.required)

    });
    this.types$ = this.getCustomer();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  UpdateOneBiller() {
    debugger
    this.loading = true;
    this.billerService.UpdateOneBiller(this.biller_id, this.createdDate, this.bill_due_dt).
    subscribe(data => {
      if (data) {
        this.loading = false;
      }
   let modified= { totalModified:data.doc.nModified }
   this.totalupdate=modified;
   swal.fire({
    text: this.totalupdate.totalModified.toString() + " document updated",
    confirmButtonColor: "red"
  });
   console.log("test",data);
  }, _error => {
    this.loading = false;
    swal.fire({
      text: 'Updated Error!',
      confirmButtonColor: "red"
      });
  })
    this.biller_id = null
    this.createdDate = null;
    this.bill_due_dt = null;
  }
  getCustomer() {
    debugger;
    this.billerService.getCustomer().subscribe(response=>
      {this.billers = response ;
        console.log(response);
      }
      );
    } 

}
