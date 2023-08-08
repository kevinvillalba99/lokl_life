import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/userDataResponse.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() userData!: UserData;

  constructor() { }


  ngOnInit(): void {
    console.log(this.userData);
  }

}
