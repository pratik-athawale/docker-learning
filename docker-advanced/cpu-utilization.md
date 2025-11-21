1. docker run --help | grep cpu

# -------- cpu count -----------
2. docker run \
-d --rm --name cpu-decimals \
--cpus=0.5 \
busybox \
sh -c "while true; do :; done"

3. docker stats
u should be able to see container cpu-decimals has taken around 50% of cpu

4. docker kill cpu-decimals

5. docker ps

6. docker-clean

# ------- cpu shares ------
7. docker run \
-d --rm --name cpu_shares_low \
--cpu-shares=512 \
--cpuset-cpus=0 \
busybox \
sh -c "while true; do:; done"

8. docker run \
-d --rm --name cpu_shares_high \
--cpu-shares=2048 \
--cpuset-cpus=0 \
busybox \
sh -c "while true; do:; done"

9. docker ps

10. docker stats
expect cpu_shares_low to take 20% cpu and cpu_shares_high to 80%

11. docker-clean

# ------- cpu quota ------
12. docker run \
-d --rm --name cpu_quota_demo \
--cpu-period=100000 \
--cpu-quota=75000 \
busybox \
sh -c "while true; do:; done"

13. docker ps

14. docker stats
expect cpu_quota_demo container to take 75% of cpu,
however the cpu-count(cpus=0.75) would do the same in easier way

15. docker-clean
