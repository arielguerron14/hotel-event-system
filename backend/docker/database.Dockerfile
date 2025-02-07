FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=hotel_system

EXPOSE 3306
