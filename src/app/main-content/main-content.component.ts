import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  studentArray: Array<IStudent> = [];
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Anthony',
        lastName: 'Ortega',
        course: 'Network Engineering'
      },
      {
        id: 2,
        firstName: 'Vanessa',
        lastName: 'Thao',
        course: 'Child Development'
      },
      {
        id: 3,
        firstName: 'Alex',
        lastName: 'Moun',
        course: 'Data Analytics'
      }
    ];
  }

  addStudent() {
    this.studentArray.unshift(
      {
        id: 1,
        firstName: 'Anthony',
        lastName: 'Ortega',
        course: 'Network Engineering'
      }
    );
  }

  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);
  }


}
