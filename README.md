<a name="custom_anchor_name"></a>

# task manager API :memo:

## Concepts applied but not limited too

- ### node js
- ### express router
- ### routes and controllers
- ### rest API
- ### mongodb atlas
- ### nosql
- ### mongoose
- ### schema & model

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
    - ex.
      - database(application) = store
      - collection(inside of database) = list of products, users, or orders etc...
      - documents (inside collections) = single product, user, or order etc...
        - set of key value pairs
        - dynamic schema
          - documents in the same collection, don't need to have the same set of fields or structure
          - doesn't mean you should
  - crud
    - create = creating an item in a collection
    - read = read docs we have in the database
    - update = update a specific document
    - delete = remove collection
  - mongoose
    - once database is ready, we need to connect to from our server
    - we can use native mongodb driver, but mongoose is better
    - object data modeling library
    - npm i mongoose
- connect to database on the server
  - connect js file
  - database name will be created for us, if not provided in connection string
  - if we have a function in module, if we import it elsewhere we execute it
  - we want the app to try and connected to database, if successful then spin up server, if not kill the app
  - to access env variables, use dotenv package,
    - require it = require('dotenv').config()
    - access it = process.env.NAME_OF_ENV
- structure for future documents and assign them to collection
  - schema and model from mongoose
  - schema to setup the structure for all the documents in our collection
    - syntax will be key value pairs
    - setup as objects, then pass in more options
    - ex. for task manager app:
      - two keys > name and completed
      - schema type > string and boolean
      - name: String, completed: Boolean
    - only properties set in schema will be passed on to the database, everything else will be ignored
  - model, a representation for the collection
    - tasks collection
    - provides an interface to the collection giving us the ability to crud documents
- persist tasks in cloud database

[Back to Top](#custom_anchor_name)
