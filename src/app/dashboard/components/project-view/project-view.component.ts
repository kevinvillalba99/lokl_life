import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';
import { UserApiService } from '../../services/userApi.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  propertiesData?: PropertyData[];
  actualProperty?: PropertyData;

  constructor(private routing: ActivatedRoute, private api: UserApiService, private router: Router) {
    this.api.getProperties().subscribe( resp => this.propertiesData = resp )
  }

  ngOnInit(): void {
    this.routing.params.subscribe( resp => {
      if( this.propertiesData ){
        this.updateProperty(resp)
      }else{
        setTimeout( () => {
          this.updateProperty(resp)
        }, 1000 )
      }
    }
    )
  }

  updateProperty(resp:any){
    this.actualProperty =
      this.propertiesData!.find( property => property.property.lokl_id == resp['lokl_id'] )
    console.log(this.actualProperty);
  }

  back(){
    this.router.navigateByUrl('dashboard')
  }

}
