import { Customer } from './customer.interface';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data:Customer[];
  selected_data:Customer[];
  errors:any;
  isHidden:Boolean;
  id:number;

  constructor(private api:ApiService){
    this.isHidden=true;
  }
 ngOnInit(){
   this.api.getCustomers().subscribe(
     (Cust:Customer[])=>this.data=Cust,
     (errors:any)=>this.errors=errors
   );
 }

//  Function to add new Customer
 add(name:string,age:number,address:string,email:string){
   console.log(name,age,address,email);
   this.api.addCustomers(name,age,address,email).subscribe(
     (data:Customer)=>this.data.push(data)
   );

 }

 //Delete Customer
 delete(id:number){
   this.api.delete(id).subscribe(
     (success:any)=>this.data.splice(
       this.data.findIndex(d=>d.id=id)
     )
   );
 }

 //Search Customer
 search(name:string){
   this.isHidden=false;
   this.api.search(name).subscribe(
    (Cust:Customer[])=>this.selected_data=Cust
   );
   
 }

 update(id:number,name:string,age:number,address:string,email:string){
  console.log(name,age,address,email);
  this.api.updateCustomer(id,name,age,address,email).subscribe()
}

}
