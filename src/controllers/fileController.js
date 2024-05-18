const path = require('path');
const fs = require ('fs');

const convertToPDF = require('../services/convertToPDF');
const convertToWord = require('../services/convertToWord');


getWordFile = async function (req, res) {
    const wordFilePath = path.join(__dirname, 'word.docx');
    const pdfFilePath = path.join(__dirname, 'cv.pdf');

    try {
        await convertToWord.convertPDFtoWord(pdfFilePath, wordFilePath);
        
        const wordContent = fs.readFileSync(wordFilePath, 'binary');
        
        res.setHeader('Content-Type', 'application/msword');
        res.setHeader('Content-Disposition', 'attachment; filename=generated_document.docx');
        res.write(wordContent, 'binary');
        res.end();

        console.log('PDF converted to Word and sent to the browser successfully.');
    } catch (error){
        console.error('Error converting PDF to Word:', error);
        res.status(500).send('Internal Server Error');
    }

}

getPdfFile = async function (req, res) {
    const wordFilePath = path.join(__dirname, 'Relatorio1.PTP1.docx');
    const pdfFilePath = path.join(__dirname, 'file.pdf');

    try {
        const pdfPath = await convertToPDF.convertWordToPDF(wordFilePath, pdfFilePath);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=generated_document.pdf');

        const fileStream = fs.createReadStream(pdfPath);
        fileStream.pipe(res);

        console.log('PDF generated and sent to the browser successfully.');
       
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = {
    getWordFile,
    getPdfFile
};


// 

// const { convertPDFtoWord } = require('./yourModule');

// const pdfFilePath = 'path/to/your/pdf/document.pdf';
// const wordFilePath = 'path/to/save/generated/document.docx';

// convertPDFtoWord(pdfFilePath, wordFilePath)
//     .then((generatedWordPath) => {
//         console.log(`Word file generated successfully at: ${generatedWordPath}`);
//     })
//     .catch((error) => {
//         console.error('Error converting PDF to Word:', error);
//     });
