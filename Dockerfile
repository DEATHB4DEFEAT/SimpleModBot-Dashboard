FROM node:17-buster-slim
WORKDIR /app/dash
RUN npm install -g react-scripts
# CMD npm run start
CMD react-scripts start