import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PropertyData } from '../../interfaces/PropertiesResponse.interface';
import { UserApiService } from '../../services/userApi.service';
import { UserData } from '../../interfaces/userDataResponse.interface';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  propertiesData?: PropertyData[];
  actualProperty?: PropertyData;
  userData?: UserData;
  private player: any;

  filename: string = "";

  repVideo: boolean = false;

  constructor(private routing: ActivatedRoute, private api: UserApiService, private router: Router) {
    this.api.getProperties().subscribe( resp => this.propertiesData = resp )

    let token: any = localStorage.getItem('token');
    if(token) this.api.getUserByToken(token).subscribe( resp => this.userData = resp )
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
    this.loadYoutubePlayerAPI();
  }

  updateProperty(resp:any){
    this.actualProperty =
      this.propertiesData!.find( property => property.property.lokl_id == resp['lokl_id'] )

    this.filename = `${this.actualProperty?.docuSigned[0]._id.substring(0, 5)}_contrato_mandato_${this.userData?.first_name}`
  }

  back(){
    this.router.navigateByUrl('dashboard')
  }

  loadYoutubePlayerAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      this.createPlayer();
    };
  }

  createPlayer() {
    this.player = new YT.Player('youtube-player', {
      height: '400',
      width: '640',
      videoId: this.actualProperty?.property.videos[0].path.split('/')
        [this.actualProperty?.property.videos[0].path.split('/').length - 1],
    });
  }

  downloadContract(){
    const link = document.createElement('a');
    link.href = this.actualProperty?.docuSigned[0].url!;
    console.log(this.filename+".pdf");
    link.download = this.filename+".pdf"; //TODO: Nombre del pdf
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
