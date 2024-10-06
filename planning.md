# Car App Planning Document

A full-stack web application that allows users to manage car listings, view details, and leave comments. Users can sign up, log in, and interact with the cars, while the app includes basic CRUD functionality for car records.

---

## Table of Contents
- [MVP Features](#mvp-features)
- [Stretch Features](#stretch-features)
- [Build Steps](#build-steps)
- [References](#references)

---

## MVP Features
1. **Boilerplate Setup**
   - Basic project setup with routing and server configuration.

2. **Run the Server**
   - Make sure the Express server is running.

3. **Connect to MongoDB**
   - Set up the database connection.

4. **GET Route**
   - Create a basic route to display content.

---

## Stretch Features
- Add a User model for user authentication.
- Implement user registration and login functionality.

---

## Build Steps

### Day 1
- Create the repository.
- Build and run the server.
- Set up a landing page.
- Create a `views` directory.
- Set up a basic route (`/`) and render `index.ejs` from the `views` directory.
- Create a Car model using Mongoose in the `models` directory.
- Set up a `controllers` directory.
- Add a navigation link to the landing page.
- Create a sign-up page with a form.
- Create a route to register new user accounts.
- Create a sign-in page with a form for existing users.

### Day 2
- Implement sign-in functionality using sessions.
- Sign the user in and manage sessions.
- Implement sign-out functionality by deleting sessions.
- Sign the user out.
- Develop CRUD routes for cars (create, read, update, delete).
- Build EJS templates for `index`, `new`, `show`, and `edit` views.
- Create navigation links in the `partials` folder.
- Style the application.

### Day 3
- Fix issues with comments/reviews.

### Day 4
- Finalize comment functionality:
  - Changed schema from `reviews` to `comments`.
  - Removed `mileage` from the Car schema and added `year`.

### Days 5-10
- CSS styling edits and changes:
  - Update page layouts for a more user-friendly interface.
  - Improve the look and feel of navigation bars and forms.
  - Add responsive design to ensure compatibility with mobile devices.
  - Enhance the visual presentation of car listings and comments.
  - Final touches on color schemes, fonts, and overall theme consistency.

---

## References
- Canvas Study Materials
- UNIT 2 Lecture and Support Recordings
