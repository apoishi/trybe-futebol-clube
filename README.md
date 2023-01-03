# Trybe Futebol Clube

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />
  
## :page_with_curl: About

This is the ninth project of the Back-end curriculum developed at Trybe.

In this project I developed a RESTful API for a previously implemented front-end application. It is an application to check match data and the overall ranking of teams in a soccer championship. It is possible to register and update games. Authentication was done with JSON Web Token. Integration tests were also implemented.

<br />
  
## 🚀 Installation

<details>
<summary>Installing and running with Docker</summary>
<br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be version **1.29** or higher.

### 1 - Clone the repository:

```
git clone git@github.com:apoishi/trybe-futebol-clube.git
```

### 2 - Enter the repository folder you just cloned and run the following command to create the container:

     cd trybe-futebol-clube

     npm run compose:up

### 3 - 3 - Access the frontend on port 3000:

    http://localhost:3000
  
Containers are mapped to the following ports:

    app_frontend: 3000
  
    app_backend: 3001
  
    db: 3002  
  
### 4 - To login with an email and password, please use one of the following provided credentials:
  
    Email	
  
    admin@admin.com	
  
    Password
  
    secret_admin
   
  or 
  
    Email
  
    user@user.com	
  
    Password
  
    secret_user
  
### 5 - To check the test coverage run the following commands:

Enter in the terminal of the backend container 

    docker exec -it app_backend sh
  
Run the command: 
  
    npm run test:coverage

    
</details>
<br />

## :man_technologist: Skills

* Create classes, types and interfaces
* Use OOP concepts such as: Abstraction, Encapsulation, Inheritance, Composition and Polymorphism
* Use SOLID principles
* Develop an Express.js application with TypeScript
* Use Sequelize.js with TypeScript
* Create a RESTful API
* Implement integration tests

<br />

## :hammer_and_wrench: Tools

* TypeScript
* Node.js
* Express.js
* Sequelize.js
* MySQL
* Mocha.js
* Chai.js
* Sinon.js
* Docker
* OOP (Object-Oriented Programming)
* SOLID

</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />
  
## :page_with_curl: Sobre

Esse é o nono projeto desenvolvido na Trybe do módulo de Back-end.

Nesse projesto desenvolvi  uma API RESTful para uma aplicação front-end  previamente implementada. É uma aplicação para conferir dados de partidas e a classificação geral de times em um campeonato de futebol. É possível cadastrar e atualizar partidas. A autenticação foi feita com JSON Web Token. Testes de integração também foram implementados.
  
<br />

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:apoishi/trybe-futebol-clube.git
```

### 2 - Entre na pasta do repositório que você acabou de clonar e use o docker-compose para subir o container:


     cd trybe-futebol-clube

     npm run compose:up

### 3 - 3 - Acesse o frontend na porta 3000:

    http://localhost:3000
  
Os conatianers estão mapeados nas seguintes portas:

    app_frontend: 3000
  
    app_backend: 3001
  
    db: 3002  
  
### 4 - Para fazer o login na aplicação, use uma das credenciais abaixo: 
  
    Email	
  
    admin@admin.com	
  
    Password
  
    secret_admin
   
  or 
  
    Email
  
    user@user.com	
  
    Password
  
    secret_user
  
### 5 - Para checar a cobertura dos testes
  
Entre no terminal do conatiner do backend:

    docker exec -it app_backend sh
  
Rode o comando:
  
    npm run test:coverage
    
</details>
<br />

## :man_technologist: Habilidades

* Criar classes, tipos e interfaces
* Utilizar princípios de POO como: Abstração, Encapsulamento, Herança, Composição e Polimorfismo
* Utilizar princípios de SOLID
* Desenvolver uma aplicação Express.js com TypeScript
* Utilizar o Sequelize.js com TypeScript
* Criar uma API RESTful
* Implementar testes de integração


<br />


## :hammer_and_wrench: Ferramentas

* TypeScript
* Node.js
* Express.js
* Sequelize.js
* MySQL
* Mocha.js
* Chai.js
* Sinon.js
* Docker
* POO (Programação Orientada à Objetos)
* SOLID

</details>
