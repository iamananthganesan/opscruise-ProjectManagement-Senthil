import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  //TaskLists
  getTaskLists(){
    return this.http.get("http://localhost:3000/tasksData");
  }
}

