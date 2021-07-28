import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = [
    {name:"Inicio", route: "/inicio",icon:"home"},
    {name:"Mi perfil", route: "/modificar",icon:"perm_contact_calendar"},
    {name:"Desactivar Cuenta", route: "/anular",icon:"delete"},
    {name:"Realizar un Pedido", route: "/pedidos",icon:"add_shopping_cart"},
    {name:"Ver mis Pedidos", route: "/ver-pedidos",icon:"credit_card"},
    {name:"Log Out", route: "/login",icon:"exit_to_app"}




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

