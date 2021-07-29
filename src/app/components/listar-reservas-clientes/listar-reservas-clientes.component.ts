import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private wsReservas : WsJeeService) { 
      this.form= this.formBuilder.group({
        cedula : []   
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
}
