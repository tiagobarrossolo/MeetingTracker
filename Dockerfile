# Use this as a base image
FROM nginx:latest

# Maintainer Info
MAINTAINER Ighor Martins <ighor.martins@gmail.com>

ENV LANG pt_PT.UTF-8

COPY dist /var/www/app
COPY nginx/start_server.sh /var/www
RUN chmod u+x /var/www/start_server.sh


# copy nginx configuration file

COPY nginx/default.conf /etc/nginx/conf.d/


CMD ["/var/www/start_server.sh"]
