<a name="custom_anchor_name"></a>

# task manager API :memo:

## Concepts applied but not limited too

- ### node js
- ### express router
- ### routes and controllers

---

### _goals_

- connect and setup cloud database, persist data to the cloud
- perform crud operations

---

### _notes_

- what routes will the app need?
  - getting all tasks = get request
  - creating a task = post request
  - delete task = delete request
  - edit task = get request and put request
  - total 5
- route structure details
  - on the server we can have many routes, not just routes for the api
  - convention is to have /api/v1/task.. routes separate
- express router
  - as application grows bigger, express router keeps app js clean and easy to maintain
- since we are sending json from app, in oder to access that data in the routes, in req body
  - use built in middle from express, app.use(express.json())
- make sure all routes work with thunder client before moving on

[Back to Top](#custom_anchor_name)
