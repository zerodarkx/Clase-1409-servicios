import { Component } from '@angular/core';
import { PrimerServicioService } from "../service/primer-servicio.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = [];
  personajes :any;

  constructor(
    private primerServicio: PrimerServicioService
  ) {
    // this.primerServicio.servicioSaludar('Julio');
    this.usuarios = this.primerServicio.getUsuario();

    this.primerServicio.getPersonajes().subscribe(
      (resultado :any) => {
        this.personajes = resultado.results
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saludar(){
    console.log(this.usuarios);
    
  } 

}
