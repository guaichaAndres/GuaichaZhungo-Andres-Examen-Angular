import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRegistrarComponent } from './restaurante-registrar.component';

describe('RestauranteRegistrarComponent', () => {
  let component: RestauranteRegistrarComponent;
  let fixture: ComponentFixture<RestauranteRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
