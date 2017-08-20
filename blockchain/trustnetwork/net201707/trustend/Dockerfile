FROM dltdojo/node-express:6
# WORKDIR /usr/src/app
COPY package.json /usr/src/app/
# npm install --production will only install "dependencies"
RUN npm install --production
COPY build /usr/src/app/build
COPY server /usr/src/app/server
CMD [ "node", "server" ]