import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';


@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})

export class EditAcercadeComponent implements OnInit {
  acerca: Acerca = null;

  constructor(private acercaS: AcercaService, private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaS.detail(id).subscribe(
      {
        next: data => {
          this.acerca = data;
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
    this.acercaS.update(id, this.acerca).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
        }, 
        error: err =>{
          alert("Error al modificar educación");
          this.router.navigate(['']);
        }
      }
    )
  }

}
