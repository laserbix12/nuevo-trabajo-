import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Importante para componentes Standalone
import { UsuarioDetalle } from './usuario'; // Corregido: Importamos desde './usuario' y la clase UsuarioDetalle

describe('UsuarioDetalle', () => {
  let component: UsuarioDetalle;
  let fixture: ComponentFixture<UsuarioDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 1. Importamos el componente (ya que es Standalone)
      imports: [UsuarioDetalle],
      // 2. Proveemos las rutas necesarias para que routerLink no falle
      providers: [
        provideRouter([]) // Pasamos un arreglo vacío si no necesitamos probar navegación real
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta la detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
