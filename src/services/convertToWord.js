// const pdf2docx = require('pdf2docx');
const fs = require('fs');

const convertPDFtoWord = function(pdfFilePath, wordFilePath) {
    return new Promise((resolve, reject) => {
        pdf2docx(pdfFilePath, wordFilePath, function(err, result) {
            if (err) {
                console.error('Error during PDF to Word conversion:', err);
                reject(err);
            } else {
                console.log('Word conversion successful');
                resolve(wordFilePath);
            }
        });
    });
};

module.exports = {
    convertPDFtoWord
};
