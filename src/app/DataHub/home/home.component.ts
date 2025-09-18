import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Data } from '../data';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allData:Data[]=[];

  constructor(private ds:DataserviceService ,private service:AuthServiceService) { }

  subscribe:boolean = true;
  ngOnInit(): void {
    this.get();
  }

  get(){
   this.ds.getData().subscribe((res)=>{
    this.allData = res;
    // console.log(this.allData);
   });
  }
  deleteData(id:any){
    // console.log(id);
    alert("Are you sure to Delete this Record!")
    this.ds.deleteData(id).subscribe((res)=>{
      console.log(res);
      this.get();
    });
  }
}
