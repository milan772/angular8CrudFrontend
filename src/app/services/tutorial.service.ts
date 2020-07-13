import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigVariable } from '../shared/app.config';

const baseUrl = ConfigVariable.BASE_API_URL;

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl+'customers');
  }

  get(id: number) {
    return this.http.get(baseUrl+'customers/'+id);
  }

  create(tutorial: any = []){
    return this.http.post(baseUrl+'customers', tutorial);
  }

  update(id: number, tutorial: any = []) {
    return this.http.put(baseUrl+'customers/'+id, tutorial);
  }

  delete(id: number) {
    return this.http.delete(baseUrl+'customers/'+id);
  }

  deleteAll() {
    return this.http.delete(baseUrl+'customers');
  }

  findByTitle(title: string) {
    return this.http.get(baseUrl+'customers?'+'name='+title);
  }
}
