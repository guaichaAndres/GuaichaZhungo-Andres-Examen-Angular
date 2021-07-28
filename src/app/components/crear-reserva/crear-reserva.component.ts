import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
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
public form : FormGroup;

  constructor(private wsReservas : WsJeeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router) {
      this.form= this.formBuilder.group({
        cedula : []
      });
    }

 
  ngOnInit(): void {
  }

  existeClient(){
    this.wsReservas.existeCliente().
    subscribe((response : any) => {
this.existeCli = response
console.log(this.existeCli);
alert(this.existeCli);

    }), (error : any) => {
      console.log(error)
  }
}
}
