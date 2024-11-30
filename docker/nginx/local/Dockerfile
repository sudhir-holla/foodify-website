FROM ubuntu:22.04

LABEL maintainer="Saurabh Kharivale"

ARG WWWGROUP
ARG APP_ENV
ARG APP_DOMAIN

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC
ENV GENERATE_SELF_SIGNED_CERTIFICATES=true

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y nginx tzdata curl gosu supervisor openssl \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN dpkg-reconfigure -f noninteractive tzdata \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && groupadd --force -g $WWWGROUP cluebots \
    && useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 cluebots

ARG ADMIN_DOMAIN
ARG CUSTOMER_DOMAIN

COPY $APP_ENV/app.conf /etc/nginx/conf.d/app.conf
COPY $APP_ENV/admin.conf /etc/nginx/conf.d/admin.conf

RUN sed -i "s/{WEBSITE_DOMAIN}/$CUSTOMER_DOMAIN/g" /etc/nginx/conf.d/app.conf \
    && sed -i "s/{WEBSITE_DOMAIN}/$ADMIN_DOMAIN/g" /etc/nginx/conf.d/admin.conf \
    && sed -i "s/{APP_DOMAIN}/$APP_DOMAIN/g" /etc/nginx/conf.d/app.conf \
    && sed -i "s/{APP_DOMAIN}/$APP_DOMAIN/g" /etc/nginx/conf.d/admin.conf

COPY nginx.conf /etc/nginx/nginx.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log \
    && rm /etc/nginx/sites-available/default && rm /etc/nginx/sites-enabled/default

COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./local/generate-ssl-certificate.sh /usr/local/bin/generate-ssl-certificate

RUN chmod +x /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/generate-ssl-certificate

ENV APP_DOMAIN=$APP_DOMAIN

CMD ["start-container"]
