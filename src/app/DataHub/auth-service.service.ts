import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  IsUserlogged(){
    return localStorage.getItem("email");
  }
}
