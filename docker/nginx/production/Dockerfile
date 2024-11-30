FROM ubuntu:22.04

LABEL maintainer="Saurabh Kharivale"

ARG WWWGROUP
ARG APP_ENV
ARG APP_DOMAIN

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y nginx tzdata curl gosu supervisor \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN dpkg-reconfigure -f noninteractive tzdata \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && groupadd --force -g $WWWGROUP cluebots \
    && useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 cluebots

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log \
    && rm /etc/nginx/sites-available/default && rm /etc/nginx/sites-enabled/default

COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN chmod +x /usr/local/bin/start-container

CMD ["start-container"]
