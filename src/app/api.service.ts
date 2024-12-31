import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './component/contactmodel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //post method
  addcontact(data: contact) {
   return this.http.post<contact>("http://localhost:3000/contact", data);
  }
  
  //get method
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/contact");
  }

  //delete method
  deletecontact(id:string){
    return this.http.delete<contact>("http://localhost:3000/contact/"+id);
  }

  //fetching data on Edit
  fetchdata(id:string){
    return this.http.get<contact>("http://localhost:3000/contact/"+id);
  }

  //update method
  updatecontact(data:contact, id:string){
    return this.http.put<contact>("http://localhost:3000/contact/"+id,data);
  }
}
