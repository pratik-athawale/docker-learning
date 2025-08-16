FROM nginx:1.27.0

RUN apt-get update
RUN apt-get -y install vim

COPY index.html /usr/share/nginx/html/index.html

# docker build -t dockerfile_nginx_server:0.0.1 .
# docker run -d -p 80:80 dockerfile_nginx_server:0.0.1
# curl http://localhost
