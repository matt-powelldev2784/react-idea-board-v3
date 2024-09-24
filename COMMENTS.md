# Comments

## React Context
* React context is used to manage the state. This was necessary as I needed a solution which would re-render the App when an idea was added, edited or deleted.
* The ideasNeedUpdateCounter state is incremented by 1 each time an idea is added, edited or deleted. This 
is used to trigger a re-render of the App.

## Tests
* I have written 3 tests located in src/tests/App.test.tsx
* This is a very simple test suite that tests:
* A user can add a new idea
* A user can delete an idea
* A user can edit an idea



