# User Authentication System

## Description
A simple *User Authentication System* built with *Java Spring Boot* for the backend, *MySQL* for the database, and *HTML, CSS, and JavaScript* for the frontend.  
Users can *register, **login, and see a **success message* upon login. The project includes *basic authentication*, form validation, and password verification.

---

## Tech Stack
- *Backend:* Java Spring Boot  
- *Database:* MySQL  
- *Frontend:* HTML, CSS, JavaScript  

---

## Features
- Signup with name, email, and password  
- Login with email and password authentication  
- Shows success messages for signup and login  
- Redirects to a success page after login  
- Basic password validation  

---

## Folder Structure
CustomerApp/
├─ src/
│   ├─ main/
│   │   ├─ java/com/example/customerapp/
│   │   │   ├─ CustomerAppApplication.java
│   │   │   ├─ controller/AuthController.java
│   │   │   ├─ model/User.java
│   │   │   └─ repository/UserRepository.java
│   │   └─ resources/
│   │        └─ static/
│   │            ├─ signup.html
│   │            ├─ login.html
│   │            └─ script.js
├─ pom.xml
└─ README.md

---

## Setup Instructions
1. Set up MySQL Database
Open MySQL Workbench or Command Line.
Run:
CREATE DATABASE customerdb;
USE customerdb;

Update database credentials in src/main/resources/application.properties:
Properties

spring.datasource.url=jdbc:mysql://localhost:3306/customerdb
spring.datasource.username=root
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Replace your_mysql_password with your MySQL password.

2. Run the Spring Boot Backend
Bash
mvn spring-boot:run

Runs the backend at http://localhost:8080⁠.

3. Open the Frontend
Open signup.html in a browser to register a user.
After signup, you are redirected to login.html.
After login, you are redirected to success.html showing login success.

---

## API Endpoints
POST /api/signup
Registers a new user.
Returns “Signup Successful!” if successful or “Email already exists!” if the email is already registered.

POST /api/login
Logs in a user with email and password.
Returns “Login Successful!” if correct, “Incorrect Password!” if the password is wrong, or “User not found!” if the email doesn’t exist.
