import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() nom_appareil: string = "";
  @Input() appareil_status: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
