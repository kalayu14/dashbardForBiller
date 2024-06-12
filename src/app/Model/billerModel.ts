//Claass of Customer Billers
export class Biller {
  stakeholder_id: String;
  full_name: String;
  short_name: String;
  tin: String;
  stakeholder_type: String;
  stakeholder_role: String;
  address: String;
  phonenumber: String;
  email: String;
  is_active: boolean;
}
//class of paidOnebiller
export interface PaidOnebiller {
  totall_paid_biller_document: number
  Paid_billers_list: PaidBillersList[]
}
export interface PaidBillersList {
  bill_submitted_as_paid: boolean
  partial_pay_allowed: boolean
  bill_data_file_id: string
  _id: string
  updated_at: string
  created_at: string
  biller_id: number
  biller_name: string
  bill_id: string
  bill_description: string
  bill_reason: string
  bill_amount_due: number
  bill_due_dt: string
  customer_id: string
  customer_name: string
  customer_mobile_number: string
  customer_email: string
  payment_status: PaymentStatus
}

export interface PaymentStatus {
  customer_mobile_number: string
  confirmation_code: string
  agent_tx_code: string
  agent_id: number
  paid_at: string
  paid_dt: string
  paid_amount: number
}

// class of UnpaidOnebiller
export interface UnpaidOnebiller {
  all_unpaid_bill: number
  unpaid_billers_list: UnpaidBillersList[]
}
export interface UnpaidBillersList {
  bill_submitted_as_paid: boolean
  partial_pay_allowed: boolean
  bill_data_file_id: string
  _id: string
  updated_at: string
  created_at: string
  biller_id: number
  biller_name: string
  bill_id: string
  bill_description: string
  bill_reason: string
  bill_amount_due: number
  bill_due_dt: string
  customer_id: string
  customer_name: string
  payee_mobile_number: string
  customer_email: string

}

//class of All paid bils
export interface Allpaidbills {
  length: any;
  biller_totall: number
  Billers_list_and_total_paid_amount: BillersListAndTotalPaidAmount[]
}

export interface BillersListAndTotalPaidAmount {
  _id: Id
  count: number
  Total_amount: number
  Total_bill_amount_due: number
}

export interface Id {
  Biller_name: string
  biller_id: number
}

//class of All Unpaid bils
export interface Allunpaidbills {
  count: number
  unpaid_billers_list: UnPaidBillersList[]
}

export interface UnPaidBillersList {
  _id: Id
  count: number
}

export interface Id {
  Biller_name: string
  biller_id: number
}
//Total piad bills amount
export interface Totalpiadbillsamount {
  total_paid_amount: TotalPaidAmount[]
}

export interface TotalPaidAmount {
  _id: string
  Total_paid_bills_amount_by_derash_system: number
}

//Total piad bills amount
export interface AlltotalunpiadDocument {
  result: Result[]
}

export interface Result {
  _id: string
  all_total_unpaid_document: number
}

//Class of Get Unpaid Biller By Created Date
export interface GetUnpaidByCreatedDate {
  count_doc: number;
  created_date_list: CreatedDateList[];
}
export interface CreatedDateList {
  bill_submitted_as_paid: boolean;
  partial_pay_allowed: boolean;
  bill_data_file_id: string;
  _id: string;
  updated_at: Date;
  created_at: Date;
  biller_id: number;
  biller_name: string;
  bill_id: string;
  bill_description: string;
  bill_reason: string;
  bill_amount_due: number;
  bill_due_dt: Date;
  customer_id: string;
  customer_name: string;
  customer_mobile_number: string;
  customer_email: string;
}

//Total modified update model
export interface Modified {
    doc: Doc
  }
export interface Doc {
    nModified: number
  }