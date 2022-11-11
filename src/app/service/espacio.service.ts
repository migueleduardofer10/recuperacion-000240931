import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Venta } from '../models/espacio';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}



  addVenta(espacio: Venta){
    return this.http.post<Venta>(this.basePath, espacio);
  }

 
 


    
}
