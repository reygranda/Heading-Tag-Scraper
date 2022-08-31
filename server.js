var cheerio = require('cheerio');

var axios = require('axios');

const fs = require('fs');

fs.readFile('./inputurls.txt', 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data.split(/\r?\n|\r|\n/g);

  processFile(content);
});

fs.writeFile('./RichardBeOwenMe.txt', '', (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

function processFile(content) {
  content.forEach((url) => {
    axios.get(url).then(async function (response) {
      var $ = cheerio.load(response.data);

      fs.appendFileSync('./ReysABeast.txt', url + '\n', (err) => {
        if (err) {
          console.error(err);
        }
      });

      $('*').each(function (i, element) {
        if (element.name === 'h1') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = 'h1:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        if (element.name === 'h2') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = '\th2:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        if (element.name === 'h3') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = '\t\th3:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        if (element.name === 'h4') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = '\t\t\th4:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        if (element.name === 'h5') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = '\t\t\t\th5:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        if (element.name === 'h6') {
          var hTags = $(element)
            .text()
            .replace(/[\r\n]/gm, '');
          var string = '\t\t\t\t\th6:' + hTags + '\n';
          fs.appendFileSync('./ReysABeast.txt', string, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      });
      fs.appendFileSync('./ReysABeast.txt', '\n\n\n\n\n\n\n\n', (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    var results = [];
  });
}
