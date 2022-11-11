import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Modelo de objeto do JSON a ser lido
interface Resposta {
  //Atributos do JSON
  id: number;
  full_name: string;
}

@Injectable()
export class GithubService {
  itens: Array<Resposta> = [];

  constructor(private http: HttpClient) {}

  getAll() {
    this.http
      .get<Array<Resposta>>('https://api.github.com/users/larguesa/repos')
      .subscribe((data) => {
        this.itens = data;
      });
  }
}
