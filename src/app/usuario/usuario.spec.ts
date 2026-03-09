import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Importante para componentes Standalone
import { Home } from './home'; // Asegúrate de que el nombre de la clase y el archivo coincidan

describe('Home Component', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 1. Importamos el componente (ya que es Standalone)
      imports: [Home],
      // 2. Proveemos las rutas necesarias para que routerLink no falle
      providers: [
        provideRouter([]) // Pasamos un arreglo vacío si no necesitamos probar navegación real
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta la detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
