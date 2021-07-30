import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  title = 'GuaichaZhungo-Andres-Examen-Angular';

  mobileQuery: MediaQueryList;
  fillerNav = [
    {name:"Inicio", route: "/inicio",icon:"home"},
    {name:"Registrar un cliente", route: "/registrarClientes",icon:"account_circle"},
    {name:"Registrar un restaurante", route: "/registrarRestaurante",icon:"restaurant"},
    {name:"Reservar un restaurante", route: "/crearReserva",icon:"av_timer"},
    {name:"Listar reservas (cli)", route: "/listarReservasClientes",icon:" format_list_bulleted"},
    {name:"Listar reservas (res)", route: "/listarReservasRestaurantes",icon:"format_list_numbered"}
]
  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}
