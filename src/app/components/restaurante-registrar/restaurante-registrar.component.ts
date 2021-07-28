import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-restaurante-registrar',
  templateUrl: './restaurante-registrar.component.html',
  styleUrls: ['./restaurante-registrar.component.css']
})
export class RestauranteRegistrarComponent implements OnDestroy {

  public form : FormGroup;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private RestService : WsJeeService) {
      this.form= this.formBuilder.group({
        nombre : [],
        direccion : [],
        telefono : [],
        maxAforo : []
      });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  public registrarRestaurante(){
    this.RestService.registrarRestaurante('http://localhost:8080/GuaichaZhungo-Andres-Examen/rest/restaurante/registrarRestaurante/',
    this.form.controls['nombre'].value, 
    this.form.controls['direccion'].value, 
    this.form.controls['telefono'].value, 
    this.form.controls['maxAforo'].value 

     
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
      this.router.navigate(['/inicio']);
    })
  }

}
