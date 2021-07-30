import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-listar-reservas-clientes',
  templateUrl: './listar-reservas-clientes.component.html',
  styleUrls: ['./listar-reservas-clientes.component.css']
})
export class ListarReservasClientesComponent implements OnDestroy {
  displayedColumns: string[] = ['id','cliente','restaurante','numPersonas','fecha','hora'];
  display = false; 
  public reservas : any =[];
  public form : FormGroup;
  public validador = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private wsReservas : WsJeeService) { 
      this.form= this.formBuilder.group({
        cedula : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
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
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  reservasCli(){
    this.wsReservas.reservasCliente(this.form.controls['cedula'].value).
    subscribe((response : any) => {
this.reservas = response
console.log(this.reservas);
this.display = true; 


    }), (error : any) => {
      console.log(error)
  }
}
get cedula(){return this.form.get('cedula')}
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
}
