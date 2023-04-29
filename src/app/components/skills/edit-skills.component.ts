import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  skills: Skills = null;

  constructor(private skillsS: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(
      {
        next: data => {
          this.skills = data;
        }, 
        error: err => {
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.update(id, this.skills).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
        }, 
        error: err =>{
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      }
    )
  }

}
