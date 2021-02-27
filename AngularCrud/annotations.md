* Angular Command Line Interface
  - Instalação do CLI:
  npm i -g @angular/cli

  - Cria aplicação:
  ng new app-name

  - Gerar novo component:
  ng generate component components/template/header -> Para criar o component de cabeçalho
  ng generate component components/template/footer

  - Criar novo service:
  ng generate service services/product

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

* Diretivas
  - Attribute Directives -> Altera a aparência e omportamento de um elemento, componente ou outra diretiva
  - Structural Directives -> Altera o layout adicionando e removendo elementos da DOM

* Binding
  - Property Binding
  - Event Binding
  - One Way Data Binding
  - Two Wat Data Binding

* Angular Router
  - Router Outlet