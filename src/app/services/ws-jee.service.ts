import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  constructor(private http: HttpClient) { }

  public registrar(url:string , cedula:any,correo:any,nombre:any,apellido:any,direccion:any,telefono:any){
    const body = new HttpParams()
    .set('cedula', cedula)
    .set('correo', correo)
    .set('nombre', nombre)
    .set('apellido', apellido)
    .set('direccion', direccion)
    .set('telefono', telefono);

    return this.http.post(url,body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    );
      }
}
