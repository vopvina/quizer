1. Install Docker, DockerCompose, Git:

2.Clone repo:
git clone https://github.com/vopvina/quizer.git
cd ./quizer/

3. Rename ENV:
mv ./backend1/env ./backend1/.env
mv ./backend2/env ./backend2/.env
mv ./quizer-main/env ./quizer-main/.env

4.Build project:
docker compose up --build -d

5. Add Questions:
docker exec -it [Backend1_id] bash
node db/seed/index.js
If u want check:
docker exec -it [Mongo_id] mongosh
use Testdb
db.questions.find().pretty()

6.Open Browser:
http://localhost 
http://YOUR-IP:80 (3001 or 3002)

