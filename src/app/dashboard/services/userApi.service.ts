import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData, UserDataResponse } from '../interfaces/userDataResponse.interface';
import * as jwtDecode from 'jwt-decode';
import { PropertiesResponse, PropertyData } from '../interfaces/PropertiesResponse.interface';

@Injectable({providedIn: 'root'})

export class UserApiService {

  constructor(private http: HttpClient, ) { }

  private executeQuery<T>( endPoint: string, headers: HttpHeaders ): any{

    console.log(headers);
    return this.http.get<T>(
      `https://develop.api.lokl.life/api/v1/${endPoint}`, {headers: headers}
    )
  }

  getUserByToken(token: string): Observable<UserData>{

    const token_dec: any = jwtDecode.default(token)

    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})

    return this.executeQuery<UserDataResponse>( `owners/${token_dec.id}`, headers)
      .pipe( map(({data}) => data) )
  }

  getProperties(): Observable<PropertyData[]>{
    const token = localStorage.getItem('token')
    const header = new HttpHeaders()
    if(token) header.set('Authorization', `Bearer ${token}`)

    return this.executeQuery<PropertiesResponse>('ownersInvestment', header)
      .pipe(
        map( ({data}) => data )
      )
  }
}
