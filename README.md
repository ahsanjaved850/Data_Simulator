# Data Simulator

## Table of Contents

- Project Overview
- Key Features
- Technical Implementation
- Setup & Installation
- Architecture & Workflow
- Compliance with BMW Requirements
- Deliverables Submitted
- Next Steps
- Contact

## Project Overview

This project demonstrates the development of a Generic DataGrid Application for BMW’s IT Internship Aptitude Test. The application enables dynamic data visualization, search, filtering, and CRUD operations via a React frontend integrated with a Node.js/Express.js backend and MongoDB. The solution adheres strictly to BMW’s specifications, including AG Grid integration, Material-UI (MUI) styling, and API-driven functionality.

## Key Features

1. Dynamic DataGrid Component
   Built with AG Grid React for scalable data rendering.

Supports N-column structural data with resizable, sortable, and filterable columns.

Includes a default "Actions" column with:

View: Navigates to a details page with comprehensive row data.

Delete: Removes entries from the grid and database.

2. Search Functionality
   Search API: Queries the backend to fetch results by brand name (e.g., "Tesla").

Advanced Filtering: Column-specific filters (contains, equals, starts/ends with) via AG Grid.

3. Backend Integration
   Express.js API with RESTful endpoints for data retrieval, search.

MongoDB Atlas for cloud-based NoSQL data storage; CSV dataset preloaded into the database.

4. User Interface
   Material-UI (MUI): Themed components for consistent styling (buttons, forms, layouts).

Responsive Design: Optimized for desktop and tablet viewing.

Navigation: Seamless routing between DataGrid and details page with a dedicated "Return" button.

5. DevOps & Version Control
   GitHub Repository: Codebase organized into feature branches (layout, table, backend, CarDetails, Searching, addData).

## Technical Implementation

### Frontend

Framework: React (TypeScript) via Vite.

Libraries: AG Grid, Material-UI, React Router.

State Management: React Hooks (useState, useEffect, useCallback).

### Backend

Runtime: Node.js with Express.js.

Database: MongoDB Atlas (NoSQL).

Middleware: cors, dotenv, mongoose.

### APIs

Endpoint Method Description
/api/data GET Fetch all data
/api/search/:brand GET Search by brand name

## Architecture & Workflow

System Architecture Diagram Include a diagram here if available.

### Data Flow:

CSV data uploaded to MongoDB via a seeding script.

Frontend fetches data via AG Grid from Express.js APIs.

User interactions (search, filter, delete) trigger API calls to update the UI.

### Git Strategy:

Feature branches for modular development.

main branch reserved for stable releases.

## Contact

For queries or further discussion, please contact:
Name: Ahsan Javed
Email: jahsan850@gmail.com
