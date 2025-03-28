﻿# Emirates Project

## About the Project
This project is a Web Application and API Gateway for managing applications stored in a static JSON file. It allows teams to:
- Retrieve data from the JSON by searching
- Delete any record
- Update any record
- Expose an API for retrieving data via REST calls

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)
- **Backend**: Spring Boot (Java)
- **Database**: Static JSON File
- **Version Control**: Git, GitHub

## Getting Started

### 1. Clone the Repository
Run the following command in your terminal:
\\\bash
git clone https://github.com/ElRuz/Emirates-Project.git
\\\

### 2. Navigate to the Project Folder
\\\bash
cd Emirates-Project
\\\

### 3. Install Dependencies  
#### Backend:
\\\bash
cd spring-gateway
mvn clean install
\\\

#### Frontend:
\\\bash
cd frontend
npm install
\\\

### 4. Start the Backend Server
\\\bash
cd spring-gateway
mvn spring-boot:run
\\\

### 5. Start the Frontend Server
\\\bash
cd frontend
npm start
\\\

## Testing the API
To test the API, use the following endpoint:
\\\bash
GET http://localhost:8080/apps
\\\

## Handling CORS Issues
During development, I faced a CORS error for several hours due to using port **9090 instead of 8080**. The fix was simply changing **9 to 8** in the port configuration.

## Key Features & Highlights
- **Animated UI**: Airplane animation adds a premium experience.
- **Full CRUD Operations**: Users can search, update, and delete records.
- **Efficient API Gateway**: Exposes JSON data for external teams.
- **GitHub Repository**: Project is fully version-controlled and documented.

## License
This project is for assessment purposes only.

---

