import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/ResponseApi_GetAllUser';
import { HttpClientModule } from '@angular/common/http';
import { dateNotGreaterThanToday } from '../../validators/dateTimeValidator';
import { genderValidator } from '../../validators/genderValidator';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers : [UserService],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  private userServices: UserService = inject(UserService);
  forms! : FormGroup;
  error: boolean = false;
  errorMessage : string[] = [];
  constructor(private FormBuilder : FormBuilder){}

  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.forms = this.FormBuilder.group({
      Nombre: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20) ]],
      Correo: ['',[Validators.required, Validators.email]],
      FechaNacimiento: ['',[Validators.required, dateNotGreaterThanToday()]],
      Genero: ['',[Validators.required, genderValidator()]]
    })
  }

  async onSubmit(){
    if (this.forms.invalid) return;
    try{
      const User: User = {
        name: this.forms.value.Nombre,
        email: this.forms.value.Correo,
        birthday: this.forms.value.FechaNacimiento,
        gender: this.forms.value.Genero,
      }
      const response = await this.userServices.createUser(User);

      console.log('Response:', response);

      if (response) {
        this.error = false;
        this.errorMessage = [];
        console.log('Ebook creado:', response);
      }


    } catch (error:any) {

      console.error('Error en onSubmit', error);
      this.error = true;
      this.errorMessage.push(error.error);

    } finally {

      console.log('Petición Finalizada');
      this.forms.reset();
    }
  }



}
