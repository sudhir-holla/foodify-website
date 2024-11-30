FROM ubuntu:22.04

LABEL maintainer="Saurabh Kharivale"

ARG WWWGROUP
ARG WWWUSER

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && mkdir -p /etc/apt/keyrings \
    && apt-get install -y software-properties-common gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python3 dnsutils librsvg2-bin fswatch cron mysql-client \
    && curl -sS 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x14aa40ec0831756756d7f66c4f4ea0aae5267a6c' | gpg --dearmor | tee /etc/apt/keyrings/ppa_ondrej_php.gpg > /dev/null \
    && echo "deb [signed-by=/etc/apt/keyrings/ppa_ondrej_php.gpg] https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
    && apt-get update \
    && apt-get install -y php8.3-fpm php8.3-cli \
       php8.3-pgsql php8.3-sqlite3 php8.3-gd \
       php8.3-curl \
       php8.3-imap php8.3-mysql php8.3-mbstring \
       php8.3-xml php8.3-zip php8.3-bcmath php8.3-soap \
       php8.3-intl php8.3-readline \
       php8.3-ldap \
       php8.3-msgpack php8.3-igbinary php8.3-redis \
       php8.3-pcov \
       php8.3-imagick \
    && curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer \
    && mkdir /run/php \
    && apt-get remove -y --purge software-properties-common \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN dpkg-reconfigure -f noninteractive tzdata \
    && setcap "cap_net_bind_service=+ep" /usr/bin/php8.3 \
    && groupadd --force -g $WWWGROUP cluebots \
    && useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 cluebots

COPY php-fpm.conf /etc/php/8.3/fpm/php-fpm.conf
COPY www.conf /etc/php/8.3/fpm/pool.d/www.conf
COPY php.ini /etc/php/8.3/fpm/conf.d/99-cluebots.ini

COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY php.ini /etc/php/8.3/cli/conf.d/99-cluebots.ini
COPY imagemagic-policy.xml /etc/ImageMagick-6/policy.xml
COPY ./cron/scheduler /etc/cron.d/scheduler

RUN chmod +x /usr/local/bin/start-container \
    && chmod 0644 /etc/cron.d/scheduler \
    && crontab /etc/cron.d/scheduler

ENTRYPOINT ["start-container"]

EXPOSE 9000
