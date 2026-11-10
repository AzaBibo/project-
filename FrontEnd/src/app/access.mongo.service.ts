import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Files } from './models/file.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessMongoService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  //CRUD OPERATIONS 

 //EXAMPLE
  public getFile(): Observable<Files[]>{
    return this.http.get<Files[]>(`${this.apiServerUrl}/mongofiles`).pipe(
      map(files => files.map(file => ({ ...file, selected: false })))
    );
  } 

  public addFile(file: Files): Observable<Files[]>{
    return this.http.post<Files[]>(`${this.apiServerUrl}/mongofiles`, file)
  } 
  
  

  /*
  public getName(name: Name): Observable<Name[]>{
    return this.http.post<any>(`${this.apiServerUrl}/mongofiles/add`)
  }  "any can be defined as the type"
  */ 

}


