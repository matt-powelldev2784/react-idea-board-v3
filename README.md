# Idea Board App

## To get started

1. Clone this repository
2. Run npm install
3. Run npm run dev
4. Open http://localhost:5173/ in your browser

## Task information

### Task
Build an idea board that allows a user to create new ideas, edit existing ideas or delete them. Each idea should be represented as a tile on the board that displays a title, description and created/updated time. The title and description should be editable inline. The description text should have a max length of 140 characters. There should also be a button on the tile that allows for it to be deleted.

When working through the task you should treat it as if you're writing real world production code. We're looking to see a test suite, comments where required and an attention to detail. In addition to this you may use whatever libraries or packages you wish. This should take you around two or three hours to complete fully but feel free to spend as much or as little time on the exercise as you like. Detail anything you didn't get around to completing in the `COMMENTS.md` file along with any other additonal information we should be aware of when reviewing the code.

### Required
* Page should be fully responsive.
* Each idea tile should contain a title and description, which is editable, as well as created/updated time.
* New ideas should have the title field focused to prompt user to begin typing.
* Add the ability to sort ideas by creation date or alphabetically.

### Stretch
* Utilise the localStorage API to persist current state when the page is refreshed.
* Add a character countdown as the user is approaching the limit of their description text.
* Add an unobtrusive notification when an update is made to a tile.


## My approach

Build app with Vite, React, TypeScript, TailwindCSS, and Jest using template form Vite Community

### Project plan in bullet points

* Page should be fully responsive
* Store ideas in local storage

* Create Idea - title field should be focused, add character countdown
* Edit Idea - title and description should be editable inline, add character countdown
* Delete Idea - inline button

* Build Idea Card - which contains title, decsription, created/updated time
* Title and description should be editable inline
* Description text should have a max length of 140 characters

* Ability to sort ideas by title and date
* Add notification when an update is made to a tile

* Add tests for main features

* Add any information reviewer should be aware of in COMMENTS.md
