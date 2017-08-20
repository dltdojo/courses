FROM nginx:stable-alpine
# https://github.com/nginxinc/docker-nginx/blob/master/stable/alpine/Dockerfile
EXPOSE 80
RUN apk --update --no-cache add bash curl jq git
#  /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/default.conf