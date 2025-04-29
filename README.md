Project made by:
	Macsim Andreea-Lavinia
	Moisescu Mihai
	Rusu Claudiu-Florin

# Teatru Vasilache Website

Welcome to the **Teatru Vasilache** website project! This project showcases a modern, interactive website for Teatrul Vasilache Botoșani, designed using Angular.

## Features
- **Homepage**: A visually appealing introduction to the theater.
- **Buy Ticket**: Purchase tickets directly from the website.
- **Team Page**: Information about the theater's team members.
- **Shows**: A gallery and paginated list of current and past shows.
- **News**: Stay updated with the latest theater news.
- **Contact**: A creative design with a blue-themed palette for contacting the theater.

## Technologies Used
- **Frontend**: Angular
- **Styling**: CSS with animations and a red-themed palette for the gallery
- **Tools**: Visual Studio Code

## Getting Started
### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/andreeamacsim/Teatru-Vasilache.git

2.Navigate to the project directory
   ```bash
  cd Teatru-Vasilache

3.Install dependencies:
  npm install

4.Start the development server:
   ng serve

Running the Application with Docker
If you prefer to run the application using Docker, you can do so with the following steps.

1. Docker Compose Setup
Ensure you have Docker  on your machine.

Clone the repository and navigate to the project folder.

If you're working with separate backend services (for example, using Express with MongoDB), create or update the docker-compose.yml file with the following configuration:
2. Building and Running the Containers
Run the following command to build and start the services:

```bash
docker-compose up --build
This will build the necessary Docker images and start all services, including:

The MongoDB container (for your database).

The shows-service (API for handling shows data).

The teams-service (API for handling team member data).


To stop the services, use:

```bash
docker-compose down

By using Docker, you ensure that the application runs consistently across different environments and machines.


3. Importing Initial Data into MongoDB
This project includes two JSON files (theaterDB.shows.json and theaterDB.teammembers.json) that contain the initial data required for the application (e.g., shows and team members). These must be manually imported into the MongoDB container after it starts.

Step-by-step Instructions:
Copy the JSON files into the MongoDB container

Use the following commands to copy the files from your local machine into the running MongoDB container (make sure to replace the example path with your actual file location):

```bash
docker cp ./data/theaterDB.shows.json mongo:/shows.json
docker cp ./data/theaterDB.team.json mongo:/teammembers.json
./data is the local folder where your JSON files are located.
mongo is the name of your MongoDB container — use docker ps to confirm or adjust it as needed.

Import the data using mongoimport

Once the files are inside the container, run the following commands to import the data:

bash
docker exec -i mongo mongoimport --db theaterDB --collection shows --file /shows.json --jsonArray
docker exec -i mongo mongoimport --db theaterDB --collection team --file /teammembers.json --jsonArray
These commands will:

Create the shows and team collections (if they don't already exist)

Populate them with the provided data

Notes
Ensure that you have Docker running on your system.

You can adjust the docker-compose.yml file if you have additional services or different configurations.

Notes
Ensure that you have Docker running on your system.

Place the public folder in both servers and in angular folder.

The Dockerfile in the frontend directory must be configured correctly to build the Angular app. Example build command:

```bash
docker build -t teatru-vasilache-frontend .

You can adjust the docker-compose.yml file if you have additional services or different configurations.
