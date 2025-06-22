1. Install Docker, Docker Compose, Git:

2. Clone repo:
git clone https://github.com/vopvina/quizer.git
cd ./quizer/

3. Rename ENV:
mv ./backend1/env ./backend1/.env
mv ./backend2/env ./backend2/.env
mv ./quizer-main/env ./quizer-main/.env

4. Build project:
docker compose up --build -d

5. Add Questions:
docker exec -it deploy-ready-clean-backend1-1 bash
node db/seed/index.js

If you want to check:
docker exec -it deploy-ready-clean-mongo-1 mongosh
use Testdb
db.questions.find().pretty()

6. Open Browser:
http://localhost
http://YOUR-IP:80
http://YOUR-IP:3001
http://YOUR-IP:3002
