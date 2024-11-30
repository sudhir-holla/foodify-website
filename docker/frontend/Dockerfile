FROM ubuntu:22.04

LABEL maintainer="Saurabh Kharivale"

ARG WWWGROUP
ARG NODE_VERSION=20

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN apt-get update \
    && apt-get install -y curl supervisor gosu git \
    && curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN groupadd --force -g $WWWGROUP cluebots \
    && useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 cluebots \
    && mkdir -p /var/www/certs \
    && chown cluebots:cluebots /var/www/certs

COPY start-container /usr/local/bin/start-container
COPY supervisord.dev.conf /etc/supervisor/conf.d/supervisord.dev.conf
COPY supervisord.prod.conf /etc/supervisor/conf.d/supervisord.prod.conf
RUN chmod +x /usr/local/bin/start-container

ENTRYPOINT ["start-container"]

EXPOSE 3000
