#!/usr/bin/env bash


FILE=$(find /var/www/app/scripts/app-*.js | head -1)

sed -i.bak "s,https://maskin.soloweb.pt,$APP_URL,g" "$FILE"


nginx


while [ -n "$(pgrep nginx)" ]
do
    sleep 5
done
