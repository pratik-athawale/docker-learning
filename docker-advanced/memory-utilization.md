# `--memory` Sets the maximum RAM the container can use.
# `--memory-reservation` reserves RAM for container
# `--memory-swap` lets us manage how much swap to uses


1. docker-clean 

2. docker run --help | grep memory

3. set memory limit to container
docker run \
-d --name=mongodb \
mongodb/mongodb-community-server:7.0-ubuntu2204

4. docker stats
here we found mongodb container uses around 80MiB memory to run, so we will try setting limit lesser than and greater than to see what happens

5. docker-cc

# set memory limit to container 
6. run container with memory limit 20 which is less than it needs
docker run \
-d --name=mongodb \
--memory="20m" \
mongodb/mongodb-community-server:7.0-ubuntu2204

7. docker ps
shows nothing

8. docker ps -a
shows the container started but exited

9. docker inspect mongodb
here in state object u find "OOMKilled": true, means the conatiner was killed due to out of memory error

10. docker-cc

# reserve memory for container
11. 
docker run \
-d --name=mongodb \
--memory-reservation="100m" \
--memory="200m" \
mongodb/mongodb-community-server:7.0-ubuntu2204

12. docker stats
here it shows the container has memory limit 200MiB

13. docker-cc

# manage swap used by container
Swap = “backup RAM” stored on disk”
When your system runs out of RAM:
Some memory pages are moved out of RAM
And placed into a special space on disk called swap space
This frees RAM for active processes.

14. lets give container less memory and let it allow using swap, and check if that works
docker run \
-d --name=mongodb \
--memory="20m" \
--memory-swap="200m" \
mongodb/mongodb-community-server:7.0-ubuntu2204
