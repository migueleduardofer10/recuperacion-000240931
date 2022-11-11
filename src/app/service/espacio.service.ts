import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Espacio } from '../models/espacio';

@Injectable({
  providedIn: 'root',
})
export class EspacioService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getEspacios() {
    return this.http.get<Espacio[]>(this.basePath);
  }

  addEspacio(espacio: Espacio){
    return this.http.post<Espacio>(this.basePath, espacio);
  }

  updateEspacio(id: number, espacio: Espacio){
    return this.http.put(`${this.basePath}/${id}`, espacio);
  }

  deleteEspacio(id:any){
    return this.http.delete<Espacio>(`${this.basePath}/${id}`)
  }
  //gET ESPACIO POR ID
  getEspacioByID(id: number){
    return this.http.get<Espacio>(`${this.basePath}/${id}`);
  }

 


    
}
