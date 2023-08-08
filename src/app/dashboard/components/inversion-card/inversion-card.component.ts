import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/userDataResponse.interface';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';

@Component({
  selector: 'app-inversion-card',
  templateUrl: './inversion-card.component.html',
  styleUrls: ['./inversion-card.component.scss']
})
export class InversionCardComponent implements OnInit {

  @Input() data!: PropertyData;

  constructor() { }

  ngOnInit(): void {
  }

}
