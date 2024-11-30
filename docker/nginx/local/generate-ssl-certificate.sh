#!/usr/bin/env bash

cd /etc/nginx/certs || exit
touch openssl.cnf
cat /etc/ssl/openssl.cnf > openssl.cnf
{ echo ""; echo "[ SAN ]"; } >> openssl.cnf
echo "subjectAltName=DNS.1:$APP_DOMAIN,DNS.2:*.$APP_DOMAIN" >> openssl.cnf
openssl req -x509 -sha256 -nodes -newkey rsa:4096 -keyout "$APP_DOMAIN.key" -out "$APP_DOMAIN.crt" -days 3650 -subj "/CN=*.$APP_DOMAIN" -config openssl.cnf -extensions SAN
rm openssl.cnf
