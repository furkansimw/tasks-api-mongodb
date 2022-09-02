# tasks-api-mongodb

create file `.env` and `URI=<MONGODBCONNECTSTRING>`

# api run for

    npm install && npm run start
    
# GET all tasks 

    localhost:3000/tasks/

# GET with id task 

    localhost:3000/tasks/ID

# POST create new task
  BODY -> task:Task name
  
    localhost:3000/tasks
  
# PATCH Update task
  BODY -> task:Task name
       -> completed: true
       
    localhost:3000/tasks/ID
    
 # Delete Delete Task
 
    localhost:3000/tasks/ID
  
  
