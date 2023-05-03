import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { EditPresentacionComponent } from './components/presentacion/edit-presentacion.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercadeComponent,
    FooterComponent,
    SkillsComponent,
    PresentacionComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditPresentacionComponent,
    EditAcercadeComponent,
    NewAcercadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
