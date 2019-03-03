import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Employed} from '../employed';
@Injectable({
  providedIn: 'root'
})
export class EmployedService {
  private employed:Employed;
private baseUri:string ="http://localhost:8788";
private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

createEmployed(employed:Employed){
return this.http.post(this.baseUri+'/create',employed,{headers:this.headers});
}
readEmployees(){
return this.http.get(this.baseUri+'/read',{headers:this.headers});
}
updateEmployed(employed:Employed){
return this.http.put(this.baseUri+'/update',employed,{headers:this.headers});
}
deleteEmployed(id:string){
return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
}

setter(employed:Employed){
  this.employed=employed;
}
getter(){
return this.employed;
}


}
