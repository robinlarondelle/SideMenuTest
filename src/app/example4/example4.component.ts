import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  toggled: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar = () => this.toggled = !this.toggled

}
