# Wanderlust

A full-stack accommodation listing web application inspired by modern property-rental platforms, built with Node.js, Express.js, MongoDB, EJS, and JavaScript.

**Project Status: In Development**

Wanderlust is an ongoing full-stack web development project focused on building a platform where users can browse, view, create, edit, and manage accommodation listings.

The core frontend, backend CRUD operations, MongoDB integration, request validation, and error-handling mechanisms have been implemented. User authentication, authorization, and additional features are currently under development.

## About the Project

Wanderlust is designed as an accommodation listing platform where property information can be stored, displayed, created, updated, and deleted through a web-based interface.

The project follows a server-side rendered architecture using Express.js and EJS, with MongoDB and Mongoose handling persistent data storage.

The current implementation focuses on building a strong backend foundation and a functional listing-management system before integrating user authentication and the remaining application features.

## Current Features
### Listing Management
View all available listings
View individual listing details
Create new listings
Edit existing listings
Delete listings
Display property image, title, description, price, location, and country
Display prices using Indian number formatting
### CRUD Operations

The application currently implements the complete CRUD workflow:

Create  →  Add a new listing
Read    →  View all listings / individual listing
Update  →  Edit an existing listing
Delete  →  Remove a listing
### Database Integration
MongoDB used as the primary database
Mongoose used for database interaction
Listing schema/model created using Mongoose
Persistent storage for listing information
### Data Validation

The application uses Joi to validate listing data before it reaches the database.

Currently validated fields include:

Title
Description
Location
Country
Price
Image

Invalid data generates an application error instead of being directly stored.

### Error Handling

The project includes a custom ExpressError class and an asynchronous route wrapper to simplify error propagation.

This allows asynchronous route errors to be passed to the centralized Express error-handling middleware.

### Frontend

The application uses:

EJS templates
EJS-Mate layouts
Bootstrap
Custom CSS
Font Awesome
Google Fonts

The listing interface uses a card-based layout for displaying properties.

## Tech Stack
Technology	Purpose
HTML5	Page structure
CSS3	Custom styling
JavaScript	Client-side functionality
EJS	Server-side HTML rendering
EJS-Mate	Reusable EJS layouts
Node.js	JavaScript runtime
Express.js	Backend web framework
MongoDB	Database
Mongoose	MongoDB object modeling
Joi	Request/data validation
Bootstrap	Responsive UI components
Font Awesome	Icons
Method-Override	PUT/DELETE form requests
## Project Architecture

The project currently follows a server-side rendered architecture:

                   ┌─────────────────┐
                   │     Browser     │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │    Express.js   │
                   │     Server      │
                   └────────┬────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        EJS Views       Validation      Error Handling
             │           (Joi)          (ExpressError)
             │
             ▼
        Mongoose Model
             │
             ▼
        ┌───────────┐
        │  MongoDB  │
        └───────────┘
## Project Structure
```
Wanderlust/
│
├── models/
│   └── listing.js              # Mongoose Listing model
│
├── public/
│   ├── css/
│   │   └── style.css           # Custom application styling
│   │
│   └── js/
│       └── script.js            # Client-side JavaScript
│
├── utils/
│   ├── ExpressError.js          # Custom error class
│   └── wrapAsync.js             # Async error wrapper
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs     # Main EJS layout
│   │
│   ├── listings/
│   │   ├── index.ejs            # All listings
│   │   ├── new.ejs              # Create listing
│   │   ├── show.ejs             # Listing details
│   │   └── edit.ejs             # Edit listing
│   │
│   └── error.ejs                # Error page
│
├── app.js                       # Main Express application
├── schema.js                    # Joi validation schema
├── package.json                 # Dependencies and project configuration
├── package-lock.json
├── .gitignore
└── README.md
```
## Current Routes

The application currently provides the following listing routes:

Method	Route	Purpose
GET	/listings	Display all listings
GET	/listings/new	Display create-listing form
GET	/listings/:id	Display a specific listing
POST	/listings	Create a new listing
GET	/listings/:id/edit	Display edit form
PUT	/listings/:id	Update an existing listing
DELETE	/listings/:id	Delete a listing

These routes form the current core of the application's listing-management system.

## Listing Data Model

Each listing currently contains:

Listing
│
├── title
├── description
├── image
├── price
├── location
└── country

The model is defined using Mongoose and stored in MongoDB.

## Validation and Error Handling

Before creating or updating a listing, the request body is validated using Joi.

The application also uses:

Joi
 │
 ├── Validate incoming data
 │
 ▼
ExpressError
 │
 ├── Create structured application errors
 │
 ▼
wrapAsync
 │
 ├── Forward asynchronous errors
 │
 ▼
Centralized Error Middleware
 │
 ▼
Error Page

This provides a foundation for handling invalid input and asynchronous backend errors consistently.

## Development Status
### Completed

Project initialization

Express server setup

MongoDB connection

Mongoose model

EJS templating

EJS-Mate layout system

Frontend listing interface

Listing creation

Listing viewing

Listing editing

Listing deletion

Joi request validation

Custom error handling

Async error handling

Bootstrap-based UI

Custom CSS styling

### Currently In Development

User registration

User sign-in

User authentication

User authorization

Connecting listings with authenticated users

Remaining application features

Final testing and refinement

Planned Improvements

User profiles

Listing ownership

Authorization for editing/deleting listings

Search and filtering

Booking functionality

Reviews and ratings

Improved form validation

Production deployment

## Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
MongoDB
npm
Git
1. Clone the repository
git clone https://github.com/Rahul-Negi-3009/Wanderlust.git
2. Navigate to the project
cd Wanderlust
3. Install dependencies
npm install
4. Start MongoDB

Make sure your MongoDB server is running locally.

The current application connects to:

mongodb://127.0.0.1:27017/wanderlust
5. Start the server
node app.js

The application runs on:

http://localhost:8080
6. Open the listings page

Visit:

http://localhost:8080/listings

## What I Have Learned

Through the development of Wanderlust, I have gained practical experience with:

Building a full-stack web application
Creating REST-style routes using Express.js
Implementing CRUD operations
Connecting Node.js applications with MongoDB
Designing Mongoose schemas and models
Rendering dynamic pages with EJS
Creating reusable EJS layouts
Validating request data with Joi
Handling asynchronous errors
Creating custom application errors
Using middleware in Express
Working with HTTP methods such as GET, POST, PUT, and DELETE
Structuring a Node.js application
Integrating frontend and backend functionality
## Future Vision

The long-term goal of Wanderlust is to evolve the current listing-management application into a complete accommodation platform.

The planned development path is:

Current CRUD System
        ↓
Authentication
        ↓
Authorization
        ↓
User-Owned Listings
        ↓
Search & Filtering
        ↓
Bookings
        ↓
Reviews & Ratings
        ↓
Testing & Deployment
        ↓
Complete Accommodation Platform

## Project Status

Wanderlust is actively under development.

The core listing-management system and backend foundation are currently implemented, while authentication and additional application features are being developed.

More features will be added as development continues.