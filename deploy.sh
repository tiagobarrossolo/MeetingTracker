#!/bin/bash


BRANCH=$(git rev-parse --abbrev-ref HEAD)
HASHED=$(git log --pretty=format:'%h' -n 1 2>&1)
REPO=registry.soloweb.pt/meeting-tracker-app



if [ "$BRANCH" != "master" ]
then
    echo 'not in the master branch, are you crazyy boy!!?? quitting!'
    exit 1
fi


git push origin master


gulp


docker-machine start default
eval "$(docker-machine env default)"


docker build -t $REPO:$HASHED .
docker push $REPO:$HASHED


curl -X POST -H "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" -F "image=$REPO:$HASHED" -F "api-key=esquilax" "http://api.hercules.soloweb.pt/jobs/"



docker-machine stop default
