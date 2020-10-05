import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { cargarUsuariosError } from '../store/actions';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
                    .pipe(
                      map(({ data }: any) => {
                        return data;
                      }),
                      catchError(err => of(cargarUsuariosError({payload: err})))
                    );
  }

  getUserById(id: string){
    return this.http.get(`${this.url}/users/${id}`)
                    .pipe(
                      map(({ data }: any) => {
                        return data;
                      }),
                      catchError(err => of(cargarUsuariosError({payload: err})))
                    );
  }
}
