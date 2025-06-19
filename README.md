1.install docker
   - [Docker](https://www.docker.com/)
   - [Docker Compose](https://docs.docker.com/compose/)


2.clone repo
     git clone https://github.com/vopvina/quizer.git
     
   cd ./quizer/


   
3. rename env
   mv ./backend1/env ./backend1/.env && \
mv ./backend2/env ./backend2/.env && \
mv ./quizer-main/env ./quizer-main/.env



5. build project
  docker-compose up --build

5.open brow
ip:80 or ip:3001/3002



docker exec-it deploy-ready-clean-backend1-1 bash

node db/seed/index.js

docker exec-it deploy-ready-clean-mongo-1 mongosh
use Testdb
db.questions.find().pretty()
