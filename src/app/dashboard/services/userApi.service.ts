import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import {
  UserData,
  UserDataResponse,
} from '../interfaces/userDataResponse.interface';
import * as jwtDecode from 'jwt-decode';
import {
  PropertiesResponse,
  PropertyData,
} from '../interfaces/PropertiesResponse.interface';
import {
  OwnerSubscriptionData,
  OwnerSubscriptionResponse,
} from '../interfaces/OwnerSubscriptionResponse.interface';
import { InfoPMS } from '../interfaces/InfoPMS.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: HttpClient) {}

  private propertiesData: PropertyData[] = [];
  private userData?: UserData;
  private ownerSubscriptionData?: OwnerSubscriptionData;
  private infoPMS?: InfoPMS;

  private executeQuery<T>(endPoint: string, headers: HttpHeaders): any {
    return this.http.get<T>(`${environment.url}${endPoint}`, {
      headers: headers,
    });
  }

  getUserByToken(token: string): Observable<UserData> {
    if (this.userData) return of(this.userData);
    const token_dec: any = jwtDecode.default(token);
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.executeQuery<UserDataResponse>(
      `owners/${token_dec.id}`,
      headers
    ).pipe(
      map(({ data }) => data),
      tap((resp: UserData) => (this.userData = resp))
    );
  }

  getProperties(): Observable<PropertyData[]> {
    if (this.propertiesData.length > 0) return of(this.propertiesData);
    const token = localStorage.getItem('token');
    const header = new HttpHeaders();
    if (token) header.set('Authorization', `Bearer ${token}`);

    return this.executeQuery<PropertiesResponse>(
      'ownersInvestment',
      header
    ).pipe(
      map(({ data }) => data),
      tap((resp: any) => (this.propertiesData = resp))
    );
  }

  getOwnerSubscription(): Observable<OwnerSubscriptionData> {
    if (this.ownerSubscriptionData) return of(this.ownerSubscriptionData);
    const token = localStorage.getItem('token');
    const header = new HttpHeaders();
    if (token) header.set('Authorization', `Bearer ${token}`);
    return this.executeQuery<OwnerSubscriptionResponse>(
      'ownerSubscription',
      header
    ).pipe(
      map(({ data }) => data),
      tap((resp: any) => (this.ownerSubscriptionData = resp))
    );
  }

  getInfoPMS(): Observable<InfoPMS> {
    if (this.infoPMS) return of(this.infoPMS);
    const token = localStorage.getItem('token');
    const header = new HttpHeaders();
    if (token) header.set('Authorization', `Bearer ${token}`);

    return this.http
      .get(`${environment.url_dash}`, { headers: header })
      .pipe(tap((resp: any) => (this.infoPMS = resp)));
  }
}
