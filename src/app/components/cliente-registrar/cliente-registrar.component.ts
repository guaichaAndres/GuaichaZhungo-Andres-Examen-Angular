import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        cedula : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        correo : ['', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)]],
        nombre : ['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
        apellido :['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
        direccion : ['',[Validators.required]],
        telefono : ['',[Validators.required, Validators.pattern(/^([0-9])*$/), Validators.minLength(10), Validators.maxLength(10)]],
        
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
  get cedula(){return this.form.get('cedula')}
  get correo(){return this.form.get('correo')}
  get nombre(){return this.form.get('nombre')}
  get apellido(){return this.form.get('apellido')}
  get direccion(){return this.form.get('direccion')}
  get telefono(){return this.form.get('telefono')}

}
