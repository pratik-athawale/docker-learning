1.  docker volume create website-data

syntax for volume: `-v <volume-name>:<container-path>`

2.  docker run \
    -d \
    -p 3000:80 \
    --name website-main \
    -v website-data:/usr/share/nginx/html \
    nginx:1.27.0

3.  docker run \
    -d \
    -p 3001:80 \
    --name website-readonly1 \
    -v website-data:/usr/share/nginx/html \
    nginx:1.27.0

4.  docker run \
    -d \
    -p 3002:80 \
    --name website-readonly2 \
    -v website-data:/usr/share/nginx/html \
    nginx:1.27.0

5.  docker exec -it website-main sh
    // this opens a shll
    echo "Hello world" > /usr/share/nginx/html/index.html
    // after doing this changes will be visbile across containers, 3000, 3001, 3002

6.  docker exec -it website-readonly1 sh
    cat /usr/share/nginx/html/index.html


// docker volume commands
docker volume ls
docker volume create website-data
docker volume inspect website-data
docker volume ls -f name=website-data
docker volume ls -f dangling=true
docker volume rm website-data
