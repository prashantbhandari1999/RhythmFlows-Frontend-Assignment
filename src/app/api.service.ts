import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getCustomers() {
    //Retrieves all customers by get method
    return this.http.get(this.baseUrl.concat(`customer/`));
  }

  addCustomers(name: string, age: number, address: string, email: string) {
    console.log(name, age, address, email);
    //Add data by post method 
    return this.http.post(
      this.baseUrl.concat('customer/'),
      { name, age, address, email }
    );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl.concat(`customer/${id}/`));
  }

  updateCustomer(id: number, name: string, age: number, address: string, email: string) {
    return this.http.put(
      this.baseUrl.concat(`customer/${id}/`),
      { id, name, age, address, email }
    );
  }
  search(name: string) {
    return this.http.get(this.baseUrl.concat(`customer?name=${name}`));
  }
}
