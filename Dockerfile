# Build:
# docker build -t reactjs/onlinerti .
#
# Run:
# docker run -it reactjs/onlinerti
#
# Compose:
# docker-compose up -d
#
# Map
# docker run -it -p 3000:3000 -v /home/yash/my-react-app/src:/opt/onlinerti/src b94bbe0e9d6c
FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /opt/onlinerti
WORKDIR /opt/onlinerti/src

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/onlinerti/package.json
RUN npm install

COPY . /opt/onlinerti

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi

EXPOSE 3000
