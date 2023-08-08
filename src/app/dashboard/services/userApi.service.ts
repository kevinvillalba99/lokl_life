import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import { UserData, UserDataResponse } from '../interfaces/userDataResponse.interface';
import * as jwtDecode from 'jwt-decode';
import { PropertiesResponse, PropertyData } from '../interfaces/PropertiesResponse.interface';

@Injectable({providedIn: 'root'})

export class UserApiService {

  constructor(private http: HttpClient, ) { }

  private propertiesData: PropertyData[] = [];

  private executeQuery<T>( endPoint: string, headers: HttpHeaders ): any{

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
    if( this.propertiesData.length > 0 ) return of(this.propertiesData)
    const token = localStorage.getItem('token')
    const header = new HttpHeaders()
    if(token) header.set('Authorization', `Bearer ${token}`)

    return this.executeQuery<PropertiesResponse>('ownersInvestment', header)
      .pipe(
        map( ({data}) => data ),
        tap( (resp: any) => this.propertiesData = resp ),
      )
  }

}
