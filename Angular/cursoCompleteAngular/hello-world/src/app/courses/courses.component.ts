import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: '{{text}} ',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
text="Pense bem antes";


  constructor() { }

  ngOnInit() {
  }

}
