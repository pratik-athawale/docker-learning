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
this however wont work as DNS resolution is not available in default docker bridge network which is a drawback, but we can do it in the user defined networks

11. exit 

12. docker-cc

# user defined networks

13. docker network --help

14. docker network create --help

15. docker network create app-net

16. docker network inspect app-net
find "Containers": {}, indicating currently no container in network, also "Driver": "bridge", which is by default

17. docker network connect --help
lets run a container and connect it to a network, check out synatx by run this command

18. docker run -d --name=webserver nginx:1.27.0

19. docker network connect app-net webserver

20. docker network inspect app-net
this should show the webserver container connected to app-net

21. docker inspect webserver
here u can notice two networks for this, app-net and bridge, when we ran container it by default got connected to bridge, also u can notice it has DNS in app-net also it has different ip address in both networks

22. docker run -it --network=app-net alpine:3.20 sh
this time we will directly connect to app-net by passing flag

run following command in alpine shell

24. apk add curl 

25. curl webserver
this time this will work as we have DNS resolution now 

26. exit 

27. docker-cc 

28. docker network inspect app-net
now it will have no containers in it

29. docker network rm app-net
app-net is removed now

30. docker network ls