# --restart=no (default)
# --restart=on-failure
# --restart=on-failure:<count>
# --restart=always
# --restart=unless-stopped


# run container with no restart policy
1. docker run \
-d --name=no-restart \
busybox \
sh -c "sleep 10; exit 1"

2. docker ps

3. after 10 sec run this, the container would be in stopped state
docker ps
docker ps -a

# restart on failure policy
4. docker run \
-d --name=restart-fail \
--restart=on-failure \
busybox \
sh -c "sleep 5; exit 1"

5. run this multiple times and see the time difference
docker ps

6. docker inspect restart-fail
this should show a field for RestartCount which tells how many times it has been restarted

this continues infinitely every time container fails it restarts

7. docker-cc

# set max retry count
8. docker run \
-d --name=restart_fail \
--restart=on-failure:3 \
busybox \
sh -c "sleep 5; exit 1"

9. docker ps
run this multiple times and some time u wont find it there, it wont restart after 3 times

10. docker inspect restart_fail | grep Restart
this should show RestartCount 3

# making container not restart if exited without failure
11. docker run \
-d --name=shouldnt_restart \
--restart=on-failure \
busybox \
sh -c "sleep 3; exit 0"

12. docker ps
run this multiple times and confirm container is not started again after its stopped

13. docker inspect shouldnt_restart | grep Restart
this should RestartCount 0

14. docker-cc

# restart=always
this restarts container always except 1. container is stopped manually, 2. docker daemon is restarted

15. docker run \
-d --name=restart_always \
--restart=always \
busybox \
sh -c "sleep 3; exit 0"

16. docker ps

17. docker inspect restart_always | grep Restart

18. docker stop restart_always

19. docker ps

20. docker-cc

# restart unless stopped
21. docker run \
-d --name=restart_us \
--restart=unless-stopped \
busybox \
sh c "sleep 3; exit 0"

22. docker ps

23. docker stop restart_us

24. docker ps

25. docker-cc


# ------------
- docker uses exponential delay to restart container
- basically every time docker is supposed to restart a container it first waits for exponenetial backoff time(max 1 minute) and then restarts and it doesn't matter why and how the container was stopped.
- Exponential backoff delay applies every time Docker restarts a container, regardless of the reason for the stop.
- The backoff ensures that Docker doesn't overwhelm the system with rapid restart attempts.

# ------------