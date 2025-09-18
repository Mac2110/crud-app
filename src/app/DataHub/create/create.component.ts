import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  dataFormHub:Data={
    id: 0,
    Name: '',
    Age: 0,
    Runs: 0,
    Fiftys:0,
    Hundreds:0
  }

  constructor(private ds:DataserviceService,private router:Router) { }

  ngOnInit(): void {
  }
 
  postData(){
    this.ds.createData(this.dataFormHub).subscribe({next:(res)=>{
      this.router.navigate(["/Datahub/home"]);
    },
    error:(err)=>{
      console.log(err);
    }
  })
  }
}
