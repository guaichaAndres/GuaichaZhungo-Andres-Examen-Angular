import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservasClientesComponent } from './listar-reservas-clientes.component';

describe('ListarReservasClientesComponent', () => {
  let component: ListarReservasClientesComponent;
  let fixture: ComponentFixture<ListarReservasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservasClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
