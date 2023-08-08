import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/userDataResponse.interface';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inversion-card',
  templateUrl: './inversion-card.component.html',
  styleUrls: ['./inversion-card.component.scss']
})
export class InversionCardComponent implements OnInit {

  @Input() data!: PropertyData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(["dashboard", this.data.property.lokl_id]);
  }
}
