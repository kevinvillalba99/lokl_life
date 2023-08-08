import { Component, OnInit } from '@angular/core';
import { InversionCardData } from '../../interfaces/InversionCardData.interface';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';
import { UserData } from '../../interfaces/userDataResponse.interface';
import { UserApiService } from '../../services/userApi.service';

import * as jwt_decode from 'jwt-decode';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData!: UserData;
  userProperties: PropertyData[] = []


  constructor(private api: UserApiService) { }

  ngOnInit(): void {
    let token: any = localStorage.getItem('token');

    if(token){
      this.api.getUserByToken(token)
        .subscribe( (resp: UserData) =>
          this.userData = resp )

      this.api.getProperties()
        .subscribe(resp => this.userProperties = resp)
    }
    else{
      //TODO: Redireccionar al login
    }

    setTimeout( ( ) => {
      console.log(this.userData);
      console.log(this.userProperties);
    }, 5000 )
  }

}
