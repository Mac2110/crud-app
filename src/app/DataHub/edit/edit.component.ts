import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../data';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dataFormHub:Data={
    id: 0,
    Name: '',
    Age: 0,
    Runs: 0,
    Fiftys:0,
    Hundreds:0
  }
  constructor(private ds:DataserviceService,private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param)=>{
       let id = Number(param.get('id'));
       this.getDataById(id);
    });
  }

  getDataById(id:number){
     this.ds.getDataById(id).subscribe((data)=>{
      this.dataFormHub = data;
     })
  }
  update(){
    this.ds.updateData(this.dataFormHub).subscribe({next:(data)=>{
      this.router.navigate(["/Datahub/home"]);
    }});
  }
}
