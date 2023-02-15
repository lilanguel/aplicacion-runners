import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  // Tallas para el atributo size del modelo Person
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  //Datos de ejemplo para la persona
  model = new Person(
    1,
    'Angel Alberto',
    'de los Rios Navarro',
    'alum.adelosriosn.2021@iesalixar.org',
    this.sizes[2],
    'CAIRS'
  );

  // Control de formulario enviado por defecto a falso
  submitted = false;

  // Una vez que el formulario se envia entonces se establece a enviado
  onSubmbit() {
    this.submitted = true;
  }

  // Metodo para inicializar una nueva persona:
  newPerson() {
    this.model = new Person(2, '', '', '', '');
  }
}
