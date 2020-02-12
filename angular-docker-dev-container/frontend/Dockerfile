FROM node:11.15.0-alpine as angular-basic-frontend
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 4200
CMD npm run start