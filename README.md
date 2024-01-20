<a name="custom_anchor_name"></a>

# task manager API :memo:

## Concepts applied but not limited too

- ### node js
- ### express router
- ### routes and controllers
- ### rest API
- ### mongodb
- ### nosql

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
- rest api
  - when building a server, we want to create a http interface, so frontend apps can interact with the data.
  - representational state transfer, most popular api design pattern
  - pattern that combines http verbs, route paths, and resources(data)
  - rest determines how the api looks
  - json is the common format for sending and receiving data in rest api
- rest api structure
  - ex. for the main list of: orders, customers, items, tasks etc..
  - same endpoint but different methods
    - GET > api/tasks > get all tasks
    - POST > api/tasks > create a task
  - for individual items, use params to point to specific item,
    - GET > api/tasks/:id > get single task
    - PUT/PATCH > api/tasks/:id > update task
    - DELETE > api/tasks/:id > delete task
- mongodb
  - relational vs non-relational db
    - major difference, unlike traditional database where we have rows and columns. in mongodb we can store everything as json, and it doesn't care how the data relates to each other
    - instead of tables we have collections, representing group of items
    - instead of rows we have documents, representing single items
      - document is a set of key value pairs, can be many data types
  - mongodb atlas
    - host and manage our data in the cloud
    -

[Back to Top](#custom_anchor_name)
