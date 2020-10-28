import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professores = [
    { id: 1, nome:'Oscar', disciplina: 'Matemática' },
    { id: 2, nome: 'Mario', disciplina: 'Filosofia' },
    { id: 3, nome: 'Gislaine', disciplina: 'Russo' },
    { id: 4, nome: 'Gisleia', disciplina: 'Programação' },
    { id: 5, nome: 'Jamanta', disciplina: 'Inglês' },
    { id: 6, nome: 'Kerolayne', disciplina: 'Física' },
    { id: 7, nome: 'Reginaldo', disciplina: 'Design' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
