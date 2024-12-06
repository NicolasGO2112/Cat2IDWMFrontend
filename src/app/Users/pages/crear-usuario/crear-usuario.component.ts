import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  forms! : FormGroup;
  error: boolean = false;
  errorMessage : string[] = [];
  constructor(private FormBuilder : FormBuilder){}

  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.forms = this.FormBuilder.group({
      Nombre: [''],
      Correo: [''],
      FechaNacimiento: [''],
      Genero: ['']
    })
  }

}
