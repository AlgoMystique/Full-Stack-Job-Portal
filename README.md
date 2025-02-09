# TalentSync - A Full-stack MERN SPA Project


# Description

The Job Portal Website is a single-page application (SPA) designed for both job seekers and recruiters. Job seekers can create an account, log in, upload their resumes, and apply for jobs in their desired field. Recruiters can post job listings and search for the right candidates. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the platform includes features like user authentication with JWT, a responsive and interactive UI, and a secure API for job posting and applying.

# Features

## Job Seeker Features:

-User authentication with JWT
-Login and registration functionality
-Upload and update resume
-Browse and apply for jobs based on category, location, and job type
-View applied jobs and application status

## Recruiter Features:

-Recruiter registration and authentication with JWT
-Post job advertisements with descriptions, requirements, and salary information
-Search for job applicants by skillset, location, and experience

# Technologies Used

# Frontend:

-React.js
-CSS (Styled-Components)
-Responsive design with media queries
-JWT Authentication for secure login and session handling

# Backend:

-Node.js
-Express.js
-GraphQL API (for querying and mutating data)
-MongoDB & Mongoose ODM (for database management)
-JWT for secure user authentication

#Deployment:

-Deployed on Render
-GitHub Actions for continuous integration

# Installation

-Clone the Repository

-Install Dependencies

-For the frontend:

```
cd client
npm install
npm run dev
```
For the backend:

```
cd server
npm install
npm start
```

# Environment Variables

Create a .env file in the root directory with the following variables:
```
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
```


