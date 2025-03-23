# Data Simulator

## Table of Contents

   - Project Overview
   - Key Features
   - Technical Implementation
   - Setup & Installation
   - Architecture & Workflow
   - Contact

## Project Overview

   This project demonstrates the development of a Generic DataGrid Application for BMW’s IT Internship Aptitude Test. The application enables dynamic data visualization, search, filtering       and deleting features via a React frontend integrated with a Node.js/Express.js backend and MongoDB. The solution adheres strictly to BMW’s specifications, including AG Grid integration,
   Material-UI (MUI) styling, and API-driven functionality.

## Key Features

   1. Dynamic DataGrid Component
      Built with AG Grid React for scalable data rendering.
      Supports N-column structural data with resizable, sortable, and filterable columns.
      Includes a default "Actions" column with:
      View: Navigates to a details page with comprehensive row data.
      Delete: Removes entries from the grid and database.
   
   3. Search Functionality
      Search API: Queries the backend to fetch results by brand name or model name (e.g., "Tesla").
      Advanced Filtering: Column-specific filters (contains, equals, starts/ends with) via AG Grid.
   
   3. Backend Integration
      Express.js API with RESTful endpoints for data retrieval, search. In search using the debounce to make the API call also used the axios for making the API calls.
      MongoDB Atlas for cloud-based NoSQL data storage; CSV dataset preloaded into the database.
   
   5. User Interface
      Material-UI (MUI): Themed components for consistent styling (buttons, forms, layouts).
      Responsive Design: Optimized for desktop and tablet viewing.
      Navigation: Seamless routing between DataGrid and details page with a dedicated "Return" button.
   
   5. DevOps & Version Control
      GitHub Repository: Codebase organized into feature branches (layout, table, backend, CarDetails, Searching, addData).

## Technical Implementation

   ### Frontend

   Framework: React (TypeScript) via Vite.
   
   Libraries: AG Grid, Material-UI, React Router.
   
   State Management: React Hooks (useState, useEffect).

   ### Backend

   Used the Debounce to make the API calls process efficient.
   
   Runtime: Node.js with Express.js.
   
   Database: MongoDB Atlas (NoSQL).
   
   Middleware: cors, dotenv, mongoose.

   ### APIs

   Endpoint Method Description
   /api/data GET Fetch all data
   /api/search/:id GET Search by brand name
   
## Setup & Installation

  ### Clone the Repository
  
      git clone https://github.com/ahsanjaved850/Data_Simulator  
      cd data-simulator
      
   ### Install Dependencies
      npm install  
      
   ### Configure Environment Variables
   If you want to run the server locally. In server/config.env add the MongoDB_URL in ATLAS_URI.
   
      ATLAS_URI=[Your-MongoDB-URI]  

   ### Run the Application(Local Server)
   Start backend  
   
      cd server
      node server.cjs  
      
   Start frontend  
   
     npm run dev  

## Architecture & Workflow
   
   ### Data Flow:
   
   CSV data uploaded to MongoDB via a seeding script.
   
   Frontend fetches data via AG Grid from Express.js APIs.
   
   User interactions (search ) trigger API call through debounce to update the UI and making the API call process efficient.
   
   Axios is used for API's call.

   ### Git Strategy:
   
   Feature branches for modular development.
   
   main branch reserved for stable releases.
   
## Contact
   
   For queries or further discussion, please contact:
   Name: Ahsan Javed
   Email: jahsan850@gmail.com
