# Dockerfile
FROM node:18.15.0-alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install

EXPOSE 5000 5001

ENV VAR1="Var value from the cloud"

CMD [ "npm", "start" ]
