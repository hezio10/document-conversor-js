const fs = require('fs');
const pdf = require('pdf-officegen');

const convertWordToPDF = function(wordFilePath, pdfFilePath) {
    return new Promise((resolve, reject) => {
        try {
            const docx = fs.createReadStream(wordFilePath);

            pdf.generate(docx, { convertTo: 'pdf' }, function(err, result) {
                if (err) {
                    console.error('Error during PDF generation:', err);
                    reject(err);
                } else {
                    const pdfOut = fs.createWriteStream(pdfFilePath);
                    result.pipe(pdfOut);

                    pdfOut.on('finish', () => {
                        console.log('PDF conversion successful');
                        resolve(pdfFilePath);
                    });

                    pdfOut.on('error', (error) => {
                        console.error('Error writing PDF file:', error);
                        reject(error);
                    });
                }
            });
        } catch (error) {
            console.error('Error:', error);
            reject(error);
        }
    });
};

module.exports = {
    convertWordToPDF
};
