import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private acercaS: AcercaService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void {
    const acerca = new Acerca(this.nombre, this.descripcion, this.img);
    this.acercaS.save(acerca).subscribe( 
      data => {
        alert("Campo añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
