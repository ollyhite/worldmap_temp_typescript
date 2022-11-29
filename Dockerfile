FROM node:18-alpine
WORKDIR /app
COPY package.* .
COPY client/package.* client/
RUN npm i
RUN cd client && npm i

COPY . .

# BUILD CLIENT
RUN cd client && npm run build

# START  SRVER
RUN npm run build
EXPOSE 8000
# ENTRYPOINT ['/bin/sh'] 
CMD npm start

