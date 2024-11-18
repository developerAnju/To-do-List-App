import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = environment.apiUrl;

  serviceURL : string;

  constructor(private http: HttpClient) { 
    this.serviceURL = "http://localhost:3000/tasks"
    // to run the json server type command "json-server --watch db.json --port 3000"
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }

  getAllTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL);
  }
  deleteTask(task: Task) : Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }
  editTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  }
}
