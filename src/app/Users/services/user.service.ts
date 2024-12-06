import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ResponseAPIGetAll, User } from '../interfaces/ResponseApi_GetAllUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl: string = 'http://localhost:5073/api/User'; // URL base de la API

    private http = inject(HttpClient);

  
  
    async GetAllUsers() : Promise<ResponseAPIGetAll>
    {
      try{
        const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}${"/Get_All_Users"}`));
        return Promise.resolve(response);
      }catch(error){
        console.log(error);
        return Promise.reject(error);
      }
      
    }

    async createUser( user: User) : Promise<ResponseAPIGetAll>{
        try{

            console.log("User en servicio", user);

            const response = await firstValueFrom(this.http.post<ResponseAPIGetAll>(`${this.baseUrl}/New_User`, user));

            console.log("User en servicio, respuesta:", response);

            return Promise.resolve(response);
        }catch(error){
            return Promise.reject(error);
        }
    }

  }
