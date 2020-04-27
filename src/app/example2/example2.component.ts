import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  toggled: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar = () => this.toggled = !this.toggled
}
