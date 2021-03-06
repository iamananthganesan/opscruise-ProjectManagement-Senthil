import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getResourceLists(): Observable<any>{
    return this.http.get("http://localhost:3000/resources")
    // .pipe(map((data)=>{   {
    //   debugger
    //   ${data}}));
    
  }

  addResource(resource:any) {
    return this.http.post("http://localhost:3000/resources",resource);
  }
}
