const axios = require('axios');
const url = 'http://192.168.1.28/.hidden/';
const regex = /href="(.*?)\"/g;


const result = [];
const maxRequest = 10;
let actualRequest = 0;

const findFile = (url) => {

    if (actualRequest > maxRequest) {
        setTimeout(() => {
            findFile(url);
        }, 200)
        return ;
    }

    actualRequest += 1;

    axios.get(url)
    .then((response) => {

        actualRequest -= 1;

        const allLink = response.data.match(regex);

        return allLink.forEach(u => {
            const clean = u.replace('href="', '').replace('"', "").replace('../', '');

            if (clean) {
                if (clean === 'README') {
                    axios.get(`${url}${clean}`)
                    .then(file => {
                        if (result.indexOf(file.data) === -1) {
                            result.push(file.data);
                            console.log(file.data);
                        }
                    })
                } else {
                    findFile(`${url}${clean}`);
                }
            }
        });
    });
};

findFile(url);
