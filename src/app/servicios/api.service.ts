import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  urlApi: string = environment.urlAPI;

  constructor(private http: HttpClient) {}

  httpGet(url: string){
    return this.http.get(`${this.urlApi}${url}`);
  }
  public HttpGetBody(url: string, data: any){
    return this.http.get(`${this.urlApi}${url}`, data);
  }

  public HttpPost(url: string, data: any){
    return this.http.post(`${this.urlApi}${url}`, data);
  }

  public HttpPut(url: string, data: any){
    return this.http.put(`${this.urlApi}${url}`, data);
  }

  public HttpDelete(url: string,id: string){
    return this.http.delete(`${this.urlApi}${url}/${id}`);   
  }
  public httpPatch(url: string, data: any){
    return this.http.patch(`${this.urlApi}${url}/pagar/${data.id_object}`,data);
  }
}
