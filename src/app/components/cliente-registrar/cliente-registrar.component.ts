import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styleUrls: ['./cliente-registrar.component.css']
})
export class ClienteRegistrarComponent implements OnDestroy {
  public form : FormGroup;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private RestService : WsJeeService) {
      this.form= this.formBuilder.group({
        cedula : [],
        correo : [],
        nombre : [],
        apellido : [],
        direccion : [],
        telefono : [],
        
      });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public registrarUsuario(){
    this.RestService.registrar('http://localhost:8080/GuaichaZhungo-Andres-Examen/rest/cliente/registrarCliente/',
    this.form.controls['cedula'].value,
    this.form.controls['correo'].value, 
    this.form.controls['nombre'].value, 
    this.form.controls['apellido'].value,
    this.form.controls['direccion'].value, 
    this.form.controls['telefono'].value
    )
    .subscribe(respuesta =>{
      alert('¡Se registró existosamente!');
      this.router.navigate(['/inicio']);
    })
  }
}
