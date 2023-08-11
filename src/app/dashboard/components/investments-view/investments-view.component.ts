import { Component, Input, OnInit } from '@angular/core';
import { UserApiService } from '../../services/userApi.service';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';
import { UserData } from '../../interfaces/userDataResponse.interface';

@Component({
  selector: 'app-investments-view',
  templateUrl: './investments-view.component.html',
  styleUrls: ['./investments-view.component.scss']
})
export class InvestmentsViewComponent implements OnInit {

  userProperties?: PropertyData[];

  constructor(private api: UserApiService){

  }

  ngOnInit(): void {
    this.api.getProperties().subscribe(
      (resp) => this.userProperties = resp
    )
  }
}
