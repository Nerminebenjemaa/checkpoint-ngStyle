import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  color="red";
  size=35;
  font="Verdana"
  constructor() { }

  ngOnInit(): void {
  }

}
