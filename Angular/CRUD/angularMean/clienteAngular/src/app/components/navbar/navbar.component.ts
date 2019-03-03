import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployedService} from '../../shared/employed.service';
import {Employed} from '../../employed';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private employedService:EmployedService) { }


  ngOnInit() {
  }
newEmployed(event:any){
event.preventDefault();
this.employedService.setter(new Employed());
this.router.navigate(['/createUpdate']);
}
}
