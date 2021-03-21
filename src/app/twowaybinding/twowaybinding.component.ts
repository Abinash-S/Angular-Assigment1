import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  twowayBindingVariable: string = '';
  myName:string = '';
  checkName() {
    if(this.twowayBindingVariable == ''){
      this.myName = 'Name cannot be blank ';
    }
    else if(this.twowayBindingVariable == 'Abinash') {
      this.myName = 'Hello Developer!';
    }
    else {
      this.myName = 'Unknown';
    }
    
  }
}
