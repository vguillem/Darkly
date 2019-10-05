#!/usr/local/bin/node

const http = require('http');

const ip = require('process').argv[2];
if (!ip) {
  console.info("pass vm ip as argument");
  return 1;
}

const url = `http://${ip}/.hidden/`;
const regex = /href="(.*?)\"/g;

const result = [];
const maxRequest = 10;
let actualRequest = 0;

function fetch(url) {
  return new Promise((res) => {
    let data = '';
    http.get(url, (resp) => {
      resp.on('data', (chunk) => { data += chunk; });
      resp.on('end', () => { res(data); });
    });
  });
}

const findFile = (url) => {

  if (actualRequest > maxRequest) {
    return setTimeout(() => { findFile(url) }, 200);
  }

  actualRequest += 1;

  fetch(url)
    .then((response) => {

      actualRequest -= 1;

      const allLink = response.match(regex);

      return allLink.forEach(link => {
        const clean = link.replace('href="', '').replace('"', '').replace('../', '');
        const cleanUrl = `${url}${clean}`;

        if (clean) {
          if (clean === 'README') {
            fetch(cleanUrl)
              .then(file => {
                if (result.indexOf(file) === -1) {
                  result.push(file);
                  console.log(file);
                }
              })
          } else {
            findFile(cleanUrl);
          }
        }
      });
    });
};

findFile(url);
