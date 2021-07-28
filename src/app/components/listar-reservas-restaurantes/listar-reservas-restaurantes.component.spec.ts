import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservasRestaurantesComponent } from './listar-reservas-restaurantes.component';

describe('ListarReservasRestaurantesComponent', () => {
  let component: ListarReservasRestaurantesComponent;
  let fixture: ComponentFixture<ListarReservasRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservasRestaurantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservasRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
