1. rename env
   mv ./backend1/env ./backend1/.env && \
mv ./backend2/env ./backend2/.env && \
mv ./quizer-main/env ./quizer-main/.env

2.install docker
   - [Docker](https://www.docker.com/)
   - [Docker Compose](https://docs.docker.com/compose/)


3.clone repo
     git clone https://github.com/vopvina/quizer.git
   cd deploy-ready-clean

4. build project
  docker-compose up --build

5.open brow
ip:80 or ip:3001/3002
