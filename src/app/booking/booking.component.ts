import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('f') signForm:NgForm | undefined;

  user = {
    firstname:'',
    lastname: '',
    email:'',
    address:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  //onSubmit(form:NgForm){
  //  console.log(form.value);
 // }

   onSubmit(){
     this.user.firstname = this.signForm?.value.firstname;
     this.user.lastname = this.signForm?.value.lastname;
     this.user.email = this.signForm?.value.email;
     this.user.address = this.signForm?.value.address;
     console.log(this.user);
     this.signForm?.reset();

   }

}
