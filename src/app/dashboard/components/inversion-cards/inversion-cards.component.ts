import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/userDataResponse.interface';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';

@Component({
  selector: 'app-inversion-cards',
  templateUrl: './inversion-cards.component.html',
  styleUrls: ['./inversion-cards.component.scss']
})
export class InversionCardsComponent implements OnInit {

  constructor() { }

  @Input() data: PropertyData[] = [];

  ngOnInit(): void {

  }

}
