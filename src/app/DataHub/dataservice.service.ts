import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  exclusive = new Subject<boolean>();

  getData(){
   return this.http.get<Data[]>("http://localhost:3000/DataHub");
  }

  createData(data:Data){
    return this.http.post<Data[]>("http://localhost:3000/DataHub" ,data);
  }

  getDataById(id:number){
    return this.http.get<Data>(`http://localhost:3000/DataHub/${id}`);
  }

  updateData(data:Data){
    return this.http.put<Data>(`http://localhost:3000/DataHub/${data.id}`,data);
  }

  deleteData(id:any){
   return this.http.delete(`http://localhost:3000/DataHub/${id}`);
  }
}
