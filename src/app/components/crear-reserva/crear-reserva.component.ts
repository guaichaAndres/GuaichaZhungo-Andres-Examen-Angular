import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  existeCli = false; 
  existeRestaurant = false; 
  public validador = false;

public form : FormGroup;
public form1 : FormGroup;
public form2 : FormGroup;



  constructor(private wsReservas : WsJeeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router) {
      this.form= this.formBuilder.group({
        cedula : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });
      this.form1= this.formBuilder.group({
        nombre : ['',[Validators.required, Validators.pattern(/^[a-zA-Záéíóú ]+$/)]],
      });
      this.form2= this.formBuilder.group({
        numPersonas : ['',[Validators.required, Validators.pattern(/^([0-9])*$/), Validators.min(1)]],
        fecha : ['',Validators.required],
        hora : ['',Validators.required]
      });

      this.form.get('cedula')?.valueChanges.subscribe(se =>{
        try{
        this.validadorDeCedula(se)
        console.log(se)
        }catch(e){
  
        }
      })
    }

 
  ngOnInit(): void {
  }

  existeClient(){
    this.wsReservas.existeCliente(this.form.controls['cedula'].value).
    subscribe((response : any) => {
this.existeCli = response
console.log(this.existeCli);

    }), (error : any) => {
      console.log(error)
  }
}

existeRestaurante(){
  this.wsReservas.existeRestaurante(this.form1.controls['nombre'].value).
  subscribe((response : any) => {
this.existeRestaurant = response
console.log(this.existeRestaurant);

  }), (error : any) => {
    console.log(error)
}
}

public crearResv(){
  this.wsReservas.crearReserva('http://localhost:8080/GuaichaZhungo-Andres-Examen/rest/reserva/crearReserva/',
  this.form.controls['cedula'].value,
  this.form1.controls['nombre'].value, 
  this.form2.controls['numPersonas'].value, 
  this.form2.controls['fecha'].value,
  this.form2.controls['hora'].value, 
  )
  .subscribe(respuesta =>{
    alert('¡Se registró una reserva existosamente!');
    this.router.navigate(['/inicio']);
  })
}
validadorDeCedula(cedula: string) {
  let cedulaCorrecta = false;
  if (cedula.length == 10)
  {    
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
          // El ultimo digito se lo considera dígito verificador
          let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
          let verificador = parseInt(cedula.substring(9, 10));
          let suma:number = 0;
          let digito:number = 0;
          for (let i = 0; i < (cedula.length - 1); i++) {
              digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
              suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
        //      console.log(suma+" suma"+coefValCedula[i]); 
          }
          suma= Math.round(suma);
        //  console.log(verificador);
        //  console.log(suma);
        //  console.log(digito);
          if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
              cedulaCorrecta = true;
          } else if ((10 - (Math.round(suma % 10))) == verificador) {
              cedulaCorrecta = true;
          } else {
              cedulaCorrecta = false;
          }
      } else {
          cedulaCorrecta = false;
      }
  } else {
      cedulaCorrecta = false;
  }
this.validador= cedulaCorrecta;

}
get cedula(){return this.form.get('cedula')}
get nombre(){return this.form1.get('nombre')}
get numPersonas(){return this.form2.get('numPersonas')}
get fecha(){return this.form2.get('fecha')}
get hora(){return this.form2.get('hora')}


}
