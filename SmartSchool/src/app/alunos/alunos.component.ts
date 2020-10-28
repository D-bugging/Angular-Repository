import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome:'Welington', sobrenome: 'Muniz', telefone: 40028922 },
    { id: 2, nome: 'Francismar', sobrenome: 'Tenório', telefone: 89467838 },
    { id: 3, nome: 'Roberval', sobrenome: 'Silva', telefone: 187364958 },
    { id: 4, nome: 'Francisca', sobrenome: 'Shirley', telefone: 10928746 },
    { id: 5, nome: 'Marta', sobrenome: 'de Paula', telefone: 12245631 },
    { id: 6, nome: 'Antonieta', sobrenome: 'Maria', telefone: 53674839 },
    { id: 7, nome: 'Leopoldo', sobrenome: 'Roffnoglin', telefone: 38759302 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
