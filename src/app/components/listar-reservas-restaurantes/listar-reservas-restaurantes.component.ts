import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-listar-reservas-restaurantes',
  templateUrl: './listar-reservas-restaurantes.component.html',
  styleUrls: ['./listar-reservas-restaurantes.component.css']
})
export class ListarReservasRestaurantesComponent implements OnDestroy {
  displayedColumns: string[] = ['id','restaurante','fecha','hora','numPersonas','cliente'];
  display = false; 

  public reservas : any =[];
  public form : FormGroup;
  public form1 : FormGroup;


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private wsReservas : WsJeeService) {
      this.form= this.formBuilder.group({
        fecha : ['',Validators.required],
      });
      this.form1= this.formBuilder.group({
        nombre : ['',[Validators.required, Validators.pattern(/^[a-zA-Záéíóú ]+$/)]],
      });
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  reservasRestaurantFecha(){
    this.wsReservas.reservasRestauranteFecha(this.form.controls['fecha'].value).
    subscribe((response : any) => {
this.reservas = response
console.log(this.reservas);
this.display = true;
    }), (error : any) => {
      console.log(error)
  }
}
reservasRestaurantNombre(){
  this.wsReservas.reservasRestauranteNombre(this.form1.controls['nombre'].value).
  subscribe((response : any) => {
this.reservas = response
console.log(this.reservas);
this.display = true;
  }), (error : any) => {
    console.log(error)
}
}
get fecha(){return this.form.get('fecha')}
get nombre(){return this.form1.get('nombre')}


}
