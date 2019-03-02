import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployedService} from '../../shared/employed.service';
import {Employed} from '../../employed';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
private employed:Employed;
  constructor(private employedService:EmployedService,private router:Router) { }

  ngOnInit() {
    this.employed=this.employedService.getter();
  }
  createOrUpdate(){
    if(this.employed._id==undefined){
    this.employedService.createEmployed(this.employed).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }else{
    this.employedService.updateEmployed(this.employed).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
}
