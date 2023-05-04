import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectosS: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      {
        next: data => {
          this.proyectos = data;
        }, 
        error: err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id, this.proyectos).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
        }, 
        error: err =>{
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      }
    )
  }
}
