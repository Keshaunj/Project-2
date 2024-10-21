# Planning for Car app
A full-stack web application that allows users to manage car listings, view details, and leave comments. Users can sign up, log in, and interact with the cars, while the app includes basic CRUD functionality for car records.

---


### Car Model

- name: String,
- year: Number,
- image: String,
- review: [reviewSchema]

### Reviews Model

- comment: String
- uploadedBy: String

### Application Flow Chart

## References (Documentation used for quick access)

- Canvas Study Materials
- UNIT 2 Lecture and Support Recordings

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

- create repo
- Build and run the server
- build a landing page
- create a views directory
- create a basic route('/') and render index.ejs from views directory
- Create a Car model with mongoose in models directory
- Adding controllers directory
- Adding a navigation link to the landing page
- Create a sign up page with a form
- Create a new user account through the sign up route
- Create a page with a form for users to sign in

### Day 2

- Implement sign in functionality with sessions
- Sign the user in
- Implement sign out functionality by deleting a session
- Sign the user out
- Working on CRUD routes


### Day 3
- Building ejs files to create index, new, show, edit views
- Creating nav links in partials folder
- Styling the application

### Day 4
- working on edit routes
- building a form for a new Car data entries
- work on application of the second model in the show.ejs

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