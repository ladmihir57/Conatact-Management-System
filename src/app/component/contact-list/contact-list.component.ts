import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {

  data: any = [];
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getcontact();
  }
  getcontact() {
    this.api.getcontact().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

  delete(item: any) {
    console.log(item);
    this.api.deletecontact(item.id).subscribe(res => {
      alert("contact deleted successfully!");
      this.getcontact();
      console.log(res);
    })
  }

  logout(){
    localStorage.removeItem("logindata");
  }
}
