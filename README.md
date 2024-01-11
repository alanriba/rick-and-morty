## Rick and Morty Explorer with Angular 17
This project is a web application developed with Angular 17 that integrates with the Rick and Morty API. It allows users to explore characters, episodes, and locations from the Rick and Morty universe. The implementation follows the principles of hexagonal architecture to ensure a clear separation between business logic and user interfaces.

## Hexagonal Architecture
In this project, the hexagonal architecture has been implemented as follows:

Ports: The ports act as interfaces between the business logic (the application domain) and the adapters. In our case, we have ports for fetching data from the Rick and Morty API.
Adapters: Adapters handle communication with external environments. We have adapters for the Rick and Morty API (infrastructure adapter) and UI adapters that interact with the end-user through Angular.
Domain: This is where the business logic of our application resides, separated from external details like databases or frameworks.
Configuration and Installation
To configure and install the project, follow these steps:

`git clone https://github.com/alanriba/rick-and-morty.git`
`cd your-repository`
`npm install`

`ng serve`
The application will be available at http://localhost:4200/.

## Integration with the Rick and Morty API
The project integrates with the Rick and Morty API to retrieve information about characters, episodes, and locations. Data requests are made using the Angular HttpClient module.

## Data Models
Data models like Character, Episode, and Location represent the data structures of the API and are used to type the response from HTTP requests.

## Contribution
If you would like to contribute to the project, please follow these steps:

## Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Submit a Pull Request with a detailed description of your changes.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
