import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router :Router) { 
    localStorage.clear();
  }

  public loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[''],
    });
  }

  login(){
    this.http.get<any>("http://localhost:3000/SignupUsers")
    .subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email &&   a.password === this.loginForm.value.password;
      });
      if(user){
        localStorage.setItem('email',this.loginForm.value.email);
        alert("Login Successfully!");
        this.loginForm.reset();
        this.router.navigate(["Datahub/home"]);
      }else{
        alert('user not found!')
      }
    })
  }

}
