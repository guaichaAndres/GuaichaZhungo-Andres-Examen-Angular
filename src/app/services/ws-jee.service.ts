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

      public registrarRestaurante(url:string,
         nombre:any,
         direccion:any,
         telefono:any,
         maxAforo:any
         ){
        const body = new HttpParams()
        
        .set('nombre', nombre)
        .set('direccion', direccion)
        .set('maxAforo', maxAforo)
        .set('telefono', telefono);
    
        return this.http.post(url,body.toString(),{
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
        );
          }

          public crearReserva(url:string,
            cedula:any,
            nombre:any,
            numPersonas:any,
            fecha:any,
            hora:any
            ){
           const body = new HttpParams()
           
           .set('cedula', cedula)
           .set('nombre', nombre)
           .set('numPersonas', numPersonas)
           .set('fecha', fecha)
           .set('hora', hora);
       
           return this.http.post(url,body.toString(),{
             headers: new HttpHeaders()
               .set('Content-Type', 'application/x-www-form-urlencoded')
           }
           );
             }

             existeCliente(){
              return this.http.get('http://localhost:8080/GuaichaZhungo-Andres-Examen/rest/cliente/existeCliente/012345678');
            }
}
