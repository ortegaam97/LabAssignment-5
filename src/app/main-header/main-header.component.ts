import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  firstName = 'Anthony';
  lastName = 'Ortega';
  greeting = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showGreeting() {

    // let column2 = document.getElementById('r1c2');
    this.greeting = 'Hello ' + this.firstName + ' ' + this.lastName + '!';

}

  resetGreeting() {
    // let column2 = document.getElementById('r1c2');
    this.greeting = 'r1c2';
}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
