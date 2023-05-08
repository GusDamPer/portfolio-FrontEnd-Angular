import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { personaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-presentacion',
  templateUrl: './edit-presentacion.component.html',
  styleUrls: ['./edit-presentacion.component.css']
})
export class EditPresentacionComponent implements OnInit {
  persona: persona = null;

  constructor(private personaService: personaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      {
        next: data => {
          this.persona = data;
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
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
        }, 
        error: err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      }
    )
  }
}
