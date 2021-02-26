* Angular Command Line Interface
  - Instalação do CLI:
  npm i -g @angular/cli

  - Cria aplicação:
  ng new app-name

* App inicialização
  - main.ts -> Primeiro arquivo que será chamado para executar aplicação em Angular
  - AppModule -> Módulo que será chamado para inicializar a aplicação
  - AppComponent -> Toda a árvore de componentes

* Um componente é composto por HTML, CSS, TS
  - HTML -> home.component.html
  - CSS -> home.component.css
  - TS -> home.component.ts

* Anatomia do Módulo
  - Declarations -> Components, Diretivas, Pipes
  - Imports -> Module A, Module B, Module C
  - Exports -> Components, Diretivas, Pipes
  - Providers -> Module A, Module B, Module C
  - Bootstrap -> APP Component