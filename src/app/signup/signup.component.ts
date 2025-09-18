import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  public signupForm !:FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
       fullName:[''],
       email:[''],
       password:[''],
       mobile:['']
    });
  }

  signup(){
    this.http.post<any>("http://localhost:3000/SignupUsers",this.signupForm.value)
    .subscribe((res)=>{
      alert("SignUp Successfully!");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert('something went wrong')
    }
    )
  }
}
