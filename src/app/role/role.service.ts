import { Injectable } from '@angular/core';
import { Role } from './role';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map, skipWhile, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient ) {
    this.http = http;
   }

  private baseUrl = `${environment.baseUrl}/role`;

  getRoles(token: any): Observable<any>{
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get(`${this.baseUrl}/all`, {headers: headers});
  }

  addRole(role: Role, token: any): Observable<Role>{
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.post<Role>(`${this.baseUrl}/add`, role, {headers: headers});
  }

  public findRoleById(id: number): Observable<Role>{
    return this.http.get<Role>(`${this.baseUrl}/get/${id}`);
  }

  updateRole(id:number, role: Role, token: any): Observable<Role>{
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.put<Role>(`${this.baseUrl}/update/${id}`, role, {headers: headers});
  }

  deleteRole(id: number, token: any): Observable<void>{
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, {headers: headers});
  }


}
