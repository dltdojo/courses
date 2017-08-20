FROM dltdojo/node-express:6
# WORKDIR /usr/src/app
COPY server /usr/src/app/server
COPY build /usr/src/app/build
COPY package.json /usr/src/app/
# npm install --production will only install "dependencies"
RUN npm install --production
CMD [ "node", "server" ]