import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/ResponseApi_GetAllUser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [NavbarComponent, ButtonsComponent, CommonModule, HttpClientModule  ],
  providers: [UserService],
  templateUrl: './ver-usuarios.component.html',

  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent {

  private userServices: UserService = inject(UserService);
  users: User[] = [];
  maxPage: number = 0;
  page: number = 1;


  constructor() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.userServices.GetAllUsers().then((users) => {
      this.users = users.users;
    }).catch((error) => {
      console.log(error);
    });
  }
  getMaxPages(){
    this.userServices.GetAllUsers().then((totalPages) => {
      this.maxPage = totalPages.totalPages;
    }).catch((error) => {
      console.log(error);
    });
  }
}


