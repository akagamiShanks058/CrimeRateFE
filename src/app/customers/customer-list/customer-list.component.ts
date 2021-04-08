import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  Customers: any = [];

  allCustomers!: Observable<Customer[]>;
  constructor(public custservice: CustomerService,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.loadAllCustomers();
  }
  loadAllCustomers() {
     this.custservice.getCustomerList().subscribe((res: {}) => {
      this.Customers = res;
    })
  }
  getCustomerList() {
    //this.custservice.getCustomerList();
    this.loadAllCustomers();
  }
  showForEdit(cust: Customer) {
    this.custservice.selectedCustomer = Object.assign({}, cust);;
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.custservice.deleteCustomer(id)
        .subscribe(x => {
          this.loadAllCustomers();
          this.toastr.warning("Deleted Successfully", "Employee Register");
        })
    }
  }

}
