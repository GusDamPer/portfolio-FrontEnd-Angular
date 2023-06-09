import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { personaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})

export class PresentacionComponent implements OnInit {
  persona: persona = {
    id: 0,
    nombre: "",
    apellido: "",
    img: "",
    puesto: "",
    compania: "",
    acerca: "",
    ubicacion: "",
  };

  isLoading: boolean = true;

  constructor(public personaService: personaService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.isLoading = true;
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
        this.isLoading = false;
      }
    )
  }
}
