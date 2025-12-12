# bridge network(default)
1. docker network ls

2. docker run -d --name=webserver nginx:1.27.0

3. docker network inspect bridge
u should find the webserver container in this 

4. docker inspect webserver
here also u can find in Networks object that this container is in bridge network, also its IP and DNSNames set to null and other details

5. docker run -it ubuntu:24.04 sh

run following commands in ubuntu shell

6. cat /etc/os-release

7. apt update && apt upgrade

8. apt install curl

9. curl 172.17.0.2/16 
take the ip address of webserver from the inspect for this, this will work and u just communicated with a container from one container with another in the same bridge network


10. curl webserver 
this however wont work as DNS resolution is not available in default docker bridge network

11. exit 
