import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl+'customers');
  }

  get(id) {
    return this.http.get(baseUrl+'customers/'+id);
  }

  create(data){
    return this.http.post(baseUrl+'customers', data);
  }

  update(id, data) {
    return this.http.put(baseUrl+'customers/'+id, data);
  }

  delete(id) {
    return this.http.delete(baseUrl+'customers/'+id);
  }

  deleteAll() {
    return this.http.delete(baseUrl+'customers');
  }

  findByTitle(title) {
    return this.http.get(baseUrl+'customers?'+'name='+title);
  }
}
