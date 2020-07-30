# diary-app

Backend setup
create server folder
"npm init -y"
"npm install express body-parser cors mongoose nodemon"
start server by "npx nodemon index.js"

install MongoDB
start by "brew services start mongodb"
Create db folder under server folder
create index.js to connect to the db

creat model folder under server folder
create diary-models.js to configure db


CRUD operation

Create: POST /api/diary (createDiary)
Update: PUT /api/diary/:id (updateDiary)
Delete: DELETE /api/diaary/:id (deleteDiary)
Read: GET /api/diary/:id (getDiaryById)
Read: GET /api/diaries (getDiaries)
