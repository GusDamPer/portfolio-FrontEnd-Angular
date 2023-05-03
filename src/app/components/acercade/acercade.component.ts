import { Component } from '@angular/core';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  acerca: Acerca[] = [];

  constructor(private acercaS: AcercaService, private tokenService: TokenService){ }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAcerca();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcerca(): void{
    this.acercaS.lista().subscribe( 
      data => {
        this.acerca = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.acercaS.delete(id).subscribe(
        {
          next: data => {
          this.cargarAcerca();
          }, 
          error: err => {
            alert("No se pudo eliminar.");
          }
        }
      );
    }
  }

}
