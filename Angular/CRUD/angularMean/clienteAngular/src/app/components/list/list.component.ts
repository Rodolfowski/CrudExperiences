import { Component, OnInit } from '@angular/core';
import {EmployedService} from'../../shared/employed.service';
import {Employed} from'../../employed';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
private employees:Employed[];
  constructor(private _employedService:EmployedService,private router:Router) { }

  ngOnInit() {
    this.readEmployees();
  }
readEmployees(){
  this._employedService.readEmployees().subscribe(
    data=>{
      console.log(data);
      this.employees=data['msg'];
    },
    error=>{
      console.log(error);
    }
  )
  }
  doUpdate(employed){
    this._employedService.setter(employed);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(employed){
    this._employedService.deleteEmployed(employed._id).subscribe(
      data=>{
        this.employees.splice(this.employees.indexOf(employed),1);
      },error=>{
        console.log(error);
      }
    )
  }
}
