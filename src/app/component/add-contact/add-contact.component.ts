import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { contact } from '../contactmodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent implements OnInit {

  // dropdownData: any[] = [];
  // selectedUser: string = '';
  contactform:FormGroup | any;
  constructor(private formbuilder:FormBuilder, private route:Router, private api:ApiService){ }
  ngOnInit(): void {
      this.contactform = this.formbuilder.group({
        firstname:['', Validators.required],
        lastname:['', Validators.required],
        phonenumber:['', Validators.required],
        city:['', Validators.required]
      });

      //Dropdown method
      // this.contactform = this.formbuilder.group({
      //   selectedUser:['']
      // });
      // this.http.get<any[]>("http://localhost:3000/contact").subscribe(
      //   (data) => {
      //     this.dropdownData = data;
      //     console.log(this.dropdownData);
          
      //   },
      //   (error) => {
      //     console.error('Error fetching data:', error);
      //   }
      // );
  }

  submitcontact(data:contact){
    // console.log(this.contactform.value);
    this.api.addcontact(data).subscribe((res=>{
      this.contactform.reset();
      this.route.navigate(["/contactlist"]);
    }));
  }
}
